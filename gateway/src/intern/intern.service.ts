import { Inject, Injectable } from '@nestjs/common';
//import { InternRepository } from './intern-repository';
import { InternType } from './models/intern.type';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateInternDto } from './models/create-intern.dto';

@Injectable()
export class InternService {
  //private _repository: InternRepository;

  // eslint-disable-next-line prettier/prettier
  constructor(
    @Inject('INTERN') private _client: ClientProxy, // injection d'un token
  ) {
    //this._repository = new InternRepository();
  }

  findAll(): Observable<Array<InternType>> {
    const pattern: any = { cmd: 'allIntern' };
    return this._client.send<InternType[]>(pattern, {});
  }

  findOne(id: string): Observable<InternType> {
    const pattern: any = { cmd: 'oneIntern' };
    const payload: string = id;
    // Logger.log('id: ' + id, 'service');
    return this._client.send<InternType>(pattern, payload); /*.pipe(
      tap((result: any) => {
        Logger.log(JSON.stringify(result));
      }),
    );*/ // le pipe permet d'afficher les infos reçus dans le send
  }

  addIntern(intern: CreateInternDto): Observable<CreateInternDto> {
    const pattern: any = { cmd: 'addIntern' };
    return this._client.send<CreateInternDto>(pattern, intern);
  }

  removeOne(id: string): Observable<CreateInternDto> {
    const pattern: any = { cmd: 'removeIntern' };
    return this._client.send<CreateInternDto>(pattern, id);
  }
}
