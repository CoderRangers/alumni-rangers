import { Controller, Get } from '@nestjs/common'
import { PoeService } from './poe.service'
import { PoeEntity } from './models/poe-entity'

@Controller('poe')
export class PoeController {
    constructor(private _service: PoeService) {}

    @Get() // defines that the endpoint GET http://localhost:3000/poe, consumes the findAll() method
    async findAll(): Promise<Array<PoeEntity>> {
        return await this._service.findAll()
    }
}
