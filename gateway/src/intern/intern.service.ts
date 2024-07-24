import { Inject, Injectable, Logger } from '@nestjs/common'
import { InternRepository } from './intern-repository'
import { InternType } from './models/intern.type'
import { ClientProxy } from '@nestjs/microservices'
import { Observable } from 'rxjs'

@Injectable()
export class InternService {
    private _repository: InternRepository

    constructor(@Inject('INTERN') private _client: ClientProxy) {
        this._repository = new InternRepository()
    }

    findAll(): Observable<Array<InternType>> {
        const pattern: any = { cmd: 'allInterns' }
        return this._client.send<InternType[]>(pattern, {})
    }

    findOne(id: number): Observable<InternType> {
        const pattern: any = { cmd: 'oneIntern' }
        // Logger.log('id: ' + id)
        return this._client.send<InternType>(pattern, id)
    }
}
