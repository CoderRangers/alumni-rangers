import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatEventModule } from './chat-event/chat-event.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { messagerSchema } from './models/messager.schema';

const envfile = 'env/' + process.env.NEST_ENV;
@Module({
  imports: [ChatEventModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: envfile }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<any>('DB_HOST'),
        dbName: configService.get<any>('DB_NAME'),
      }),
    }),
    MongooseModule.forFeature([{ name: 'messager', schema: messagerSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
