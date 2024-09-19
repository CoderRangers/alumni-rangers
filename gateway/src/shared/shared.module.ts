import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'COMPANY-FEEDBACK',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3400,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class SharedModule {}
