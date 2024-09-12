import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectModule } from './connect.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { InitDbService } from './services/init-db.service';

@Module({
  imports: [
    ConnectModule,
    ClientsModule.register([
      {
        name: 'INTERN',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3100,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, InitDbService],
})
export class AppModule {}
