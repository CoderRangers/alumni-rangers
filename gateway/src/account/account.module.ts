import { Module } from '@nestjs/common'
import { AccountService } from './account.service'
import { AccountController } from './account.controller'
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'ACCOUNT',
                transport: Transport.TCP,
                options: {
                    host: '127.0.0.1',
                    port: 3200,
                },
            },
        ]),
    ],
    controllers: [AccountController],
    providers: [AccountService],
})
export class AccountModule {}
