import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from './models/company.entity';
import { CompanyFeedbackEntity } from './models/company-feedback.entity';
import { CompanyModule } from './company/company.module';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';

const envfile = process.env.EXEC_MODE; // first step acces the content of the EXEC_MODE environment variable
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envfile,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (_configService: ConfigService) => ({
        type: _configService.get<any>('DB_TYPE'),
        host: _configService.get<string>('DB_HOST'),
        port: _configService.get<number>('DB_PORT'),
        username: _configService.get<string>('DB_USER'),
        password: _configService.get<string>('DB_PASSWORD'),
        database: _configService.get<string>('DB_DATABASE'),
        synchronize: _configService.get<boolean>('ORM_OPTIONS_SYNC'), // at each execution of gateway, (re)create the post_repository database
        entities: [CompanyEntity, CompanyFeedbackEntity],
      }),
    }),
    TypeOrmModule.forFeature([CompanyEntity, CompanyFeedbackEntity]),
    CompanyModule,
  ],
  controllers: [AppController, CompanyController],
  providers: [AppService, CompanyService],
})
export class AppModule {}
