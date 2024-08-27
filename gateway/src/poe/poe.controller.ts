/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { PoeService } from './poe.service';
//import { PoeEntity } from './models/poe-entity';
import { PoeType } from './models/poe.type';

@Controller('poe')
export class PoeController {
    constructor(private _service: PoeService) {}

    @Get()
    async findAll(): Promise<Array<PoeType>> {
        return await this._service.findAll()
    }
}
