import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { internSchema } from './models/interns.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';

const envfile = 'env/' + process.env.NEST_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: envfile }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<any>('DB_HOST'),
        dbName: configService.get<any>('DB_NAME'),
      }),
    }),
    /*MongooseModule.forRoot('mongodb://admin:nimda@127.0.0.1:27017', {
      dbName: 'intern_db_admin',
    }), */
    MongooseModule.forFeature([{ name: 'Intern', schema: internSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService, AppRepository],
})
export class AppModule {}
