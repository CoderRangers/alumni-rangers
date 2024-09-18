import { Inject, Injectable } from '@nestjs/common';
import { InternType } from './models/intern.type';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateInternDto } from './models/create-intern.dto';

/**
 * The InternService class manages profile information for users of
 * the Alumni application, that are current or former interns of
 * Aelion's trainings.
 *
 * More specifically, InternService is an intermediary between
 * intern-related requests received by the gateway, and the
 * micro-service actually storing intern profile information.
 * InternService communicates with the micro-service over TCP, using
 * the request-response message style.
 *
 * The different types of request InternService handles are:
 *  - creating a intern new profile
 *  - deleting an intern profile
 *  - retrieving intern profiles, for one or all interns
 */
@Injectable()
export class InternService {
  constructor(@Inject('INTERN') private _client: ClientProxy) {}

  findAll(): Observable<Array<InternType>> {
    const pattern: any = { cmd: 'allIntern' };
    return this._client.send<InternType[]>(pattern, {});
  }

  findOne(id: string): Observable<InternType> {
    const pattern: any = { cmd: 'oneIntern' };
    const payload: string = id;
    return this._client.send<InternType>(pattern, payload);
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
