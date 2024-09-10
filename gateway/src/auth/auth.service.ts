import { Injectable, Logger } from '@nestjs/common';
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
    return new Promise(async (resolve, reject) => {
      const account = await lastValueFrom(
        this._accountService.login(email, pwd),
      );
      if (account) {
        const payload = { sub: account.id, username: account.email };
        const access_token = this.jwtService.sign(payload);
        resolve({
          access_token,
        });
      }
      reject();
    });
  }

  // TODO create tokenType, add internId in AccountType and Db, add request on authController to acces at the internId
  getInternId(token): string {
    const user = this.jwtService.decode(token);
    return user.id;
  }

  async tokenCheck(token: any): Promise<boolean> {
    let isTokenValid = false;
    /* Logger.log(
      `AuthService.tokenCheck(token): token: ${JSON.stringify(token)}`,
    ); */
    try {
      let tokenPayload!: any;
      await this.jwtService.verifyAsync(token).then((payload) => {
        /* Logger.log(
            `AuthService.tokenCheck(token): payload: ${JSON.stringify(payload)}`,
          ); */
        tokenPayload = payload;
        if (tokenPayload !== undefined) {
          isTokenValid = true;
        }
      });
      /* Logger.log(
        `AuthService.tokenCheck(token): tokenPayload: ${JSON.stringify(tokenPayload)}`,
      ); */
    } catch (error) {
      // Different types of exceptions expected:
      // - TokenExpiredError
      // - JsonWebTokenError: invalid token: when the encoded JWT header has been altered
      // - JsonWebTokenError: invalid signature: when the encoded JWT signature has been altered
      // - SyntaxError: when the encoded JWT payload has been altered
      Logger.log(
        `AuthService.tokenCheck(token): Exception when verifying a JWT: ${error} , token: ${token}`,
      );
    }
    return isTokenValid;
  }
}
