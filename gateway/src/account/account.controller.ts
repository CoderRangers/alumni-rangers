import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Logger,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { Observable, take } from 'rxjs';
import { AccountType } from './model/account-type';
import { Response } from 'express';
import { LogType } from './model/log-type';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  findAll(): Observable<Array<AccountType>> {
    return this.accountService.findAll().pipe(take(1));
  }

  @Get(':email')
  findOne(@Param('email') email: string, @Res() res: Response) {
    const typeEmail: string = email;
    Logger.log('typeEmail: ' + typeEmail);
    return this.accountService
      .findOne(typeEmail)
      .pipe(take(1))
      .subscribe({
        next: (response: any) => {
          Logger.log('response: ' + response);
          if (response) {
            res.status(200).send(response);
          } else {
            res.status(404).send();
          }
        },
        error: (error: any) => {
          res.status(500).send(error);
        },
      });
  }

  @Post()
  doLogin(@Body() credential: LogType, @Res() res: Response): void {
    this.accountService
      .login(credential.email, credential.pwd)
      .pipe(take(1))
      .subscribe({
        next: (response: boolean) => {
          if (response) {
            res.status(HttpStatus.OK).send(response);
          } else {
            res.status(HttpStatus.BAD_REQUEST).send();
          }
        },
        error: (error: any) => {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        },
      });
  }
}
