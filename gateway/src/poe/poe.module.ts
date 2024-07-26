import { Module } from '@nestjs/common'
import { PoeService } from './poe.service'
import { PoeController } from './poe.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PoeEntity } from './models/poe-entity'

@Module({
    // providers: [PoeService],
    // controllers: [PoeController],
    // imports: [TypeOrmModule.forFeature([PoeEntity])],
    providers: [],
    controllers: [],
    imports: [],
})
export class PoeModule {}
