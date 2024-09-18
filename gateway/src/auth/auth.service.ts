import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { AccountService } from 'src/account/account.service';
import { JwtService } from '@nestjs/jwt';
import { TokenInfoType } from './model/token-info-type';

/**
 * This service is used to connect user safely
 * and generate token auth
 */

@Injectable()
export class AuthService {
  /**
   * dependence injection in constructor's parameters of AuthService class
   * @param _accountService is required to ensure that user is an intern from aélion
   * @param jwtService is a dependency which generate a token automatically
   */
  constructor(
    private _accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  /**
   * verify if credentials are conformed and generate token
   * @param email user's mail used for login
   * @param pwd user's password used for login
   * @returns if user can log generate and return a token
   */
  async signIn(email: string, pwd: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const account = await lastValueFrom(
        this._accountService.login(email, pwd),
      );
      if (account) {
        const payload: TokenInfoType = {
          id: account.id,
          email: account.email,
          internId: account.internId,
        };
        const access_token = this.jwtService.sign(payload);
        resolve({
          access_token,
        });
      }
      reject();
    });
  }

  /**
   * decode information from a token
   * @param token a jwt Token
   * @returns an TokenInfoType object
   */
  getTokenInfo(token: string): TokenInfoType {
    const tokenInfo: TokenInfoType = this.jwtService.decode(token);
    return tokenInfo;
  }

  /**
   * verify validity and authenticity of an auth token
   * @param token a jwt Token
   * @returns a promise of boolean
   */
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
