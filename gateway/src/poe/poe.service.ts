/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
//import { InjectRepository } from '@nestjs/typeorm';
//import { PoeEntity } from './models/poe-entity';
//import { Repository } from 'typeorm';
import { PoeType } from './models/poe.type';
import { PoeRepository } from './poe.repository';

@Injectable()
export class PoeService {
    constructor(
        private _repository: PoeRepository
    ) {}

    findAll(): Array<PoeType> {
        return this._repository.find()
    }
}
