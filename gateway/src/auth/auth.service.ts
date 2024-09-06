import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { AccountService } from 'src/account/account.service';
// import { AccountType } from 'src/account/model/account-type';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private _accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pwd: string): Promise<any> {
    const account = await lastValueFrom(this._accountService.login(email, pwd));
    if (account) {
      const payload = { sub: account.id, username: account.email };
      const access_token = await this.jwtService.signAsync(payload);
      return {
        access_token,
      };
    }
  }
}
