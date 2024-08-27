import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternModule } from './intern/intern.module';
import { PostModule } from './post/post.module';
//import { PostModule } from './post/post.module';
//import { TypeOrmModule } from '@nestjs/typeorm';
//import { PostEntity } from './post/models/post-entity';
//import { PoeModule } from './poe/poe.module';
//import { PoeEntity } from './poe/models/poe-entity';
//import { ConfigModule, ConfigService } from '@nestjs/config';

//const envfile = 'env/' + process.env.NEST_ENV;

@Module({
  imports: [
    InternModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  /*
  constructor(private configService: ConfigService) {}

  public mariaDBConfig: TypeOrmModuleOptions = {
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'post_db_admin',
    password: 'admin_db_post',
    database: 'post_repository',
    synchronize: true,
    entities: [PostEntity, PoeEntity],
  };
  */
}
