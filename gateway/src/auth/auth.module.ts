import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccountModule } from 'src/account/account.module';
import { JwtModule } from '@nestjs/jwt';
// import { jwtConstants } from './contants';
import { AuthGuard } from './auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';

const envfile = 'env/' + process.env.NEST_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envfile,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (_configService: ConfigService) => ({
        global: true,
        secret: _configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: parseInt(
            _configService.getOrThrow<string>('JWT_EXPIRE_IN'),
          ),
        },
      }),
    }),
    AccountModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  exports: [AuthService, AuthGuard, JwtModule],
})
export class AuthModule {}
