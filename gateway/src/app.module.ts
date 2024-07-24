/* eslint-disable prettier/prettier */
import { Inject, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { InternModule } from './intern/intern.module'
import { PostModule } from './post/post.module'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { PostEntity } from './post/models/post-entity'
import { PoeModule } from './poe/poe.module';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { PoeEntity } from './poe/models/poe-entity'

// dotenv.config({path: `.$(process.env.ENV_MODE).env`})
 const envfile = process.env.ENV_MODE
@Module({
    imports: [InternModule, PostModule,
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
                entities: [PostEntity, PoeEntity],
            }),
        }), PoeModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    // constructor(private _configService: ConfigService) {}

    /* public mariaDBConfig: TypeOrmModuleOptions = {
        type: this._configService.get<string>('DB_TYPE'),
        host: this._configService.get<string>('DB_HOST'), // name of the docker service, defined in docker-compose.yml
        port: 3306,
        username: 'post_db_admin',
        password: 'admin_db_post',
        database: 'post_repository',
        synchronize: true, // at each execution of gateway, (re)create the post_repository database
        entities: [PostEntity],
    } */
}
