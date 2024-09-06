import { Injectable } from '@nestjs/common';
import { take } from 'rxjs';
import { AccountService } from 'src/account/account.service';
import { AccountType } from 'src/account/model/account-type';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private _accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pwd: string): Promise<any> {
    this._accountService
      .login(email, pwd)
      .pipe(take(1))
      .subscribe({
        next: async (account: AccountType | null) => {
          if (account === null) {
            return null;
          } else {
            const payload = { sub: account.id, username: account.email };
            return {
              access_token: await this.jwtService.signAsync(payload),
            };
          }
        },
      });
  }
}
