import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { PoeEntity } from './models/poe-entity'
import { Repository } from 'typeorm'

@Injectable()
export class PoeService {
    constructor(
        @InjectRepository(PoeEntity) private _repository: Repository<PoeEntity>
    ) {}

    findAll(): Promise<Array<PoeEntity>> {
        return this._repository.find({
            order: {
                beginAt: 'DESC',
            },
        })
    }
}
