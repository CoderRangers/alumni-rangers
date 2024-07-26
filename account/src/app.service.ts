import { Injectable } from '@nestjs/common';
import { AccountType } from './models/account.type';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from './models/account-entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(AccountEntity)
    private _repository: Repository<AccountEntity>,
  ) {}

  getAllAccounts(): Promise<Array<AccountEntity>> {
    return this._repository.find();
  }

  getOneAccount(payload: any): Promise<AccountType> {
    // Logger.log('email: ' + JSON.stringify(email));
    // Logger.log('email.email: ' + email.email);
    const dbRequestResult = this._repository.findOneBy({
      email: payload.email,
    });
    // Logger.log('dbRequestResult: ' + JSON.stringify(dbRequestResult));
    return dbRequestResult;
  }
}
