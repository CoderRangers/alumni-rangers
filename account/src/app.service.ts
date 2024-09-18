import { Injectable } from '@nestjs/common';
import { AccountType } from './models/account.type';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from './models/account-entity';
import { Repository } from 'typeorm';

/**
 * Here we are in account service. This class instantiates
 * a repository for account entity with a constructor.
 * The purpose of this service is to use the differents methods
 * provided by the repository to manipulate data.
 * We inject the repo and we create a propriety to apply the methods.
 *
 * This service handles request to database in order to
 * obtain by example : the list of account using the repository.
 * We can also query the database to check whether a user can log in
 * if his or her account is activated,
 * and whether the credentials exist.
 */

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

  canLogin(mail: string, pwd: string): Promise<AccountType> {
    if (mail !== undefined && pwd !== undefined) {
      return this._repository.findOneBy({
        email: mail,
        password: pwd,
        isActivated: true,
      });
    }
  }
}
