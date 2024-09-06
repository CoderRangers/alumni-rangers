import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AccountType } from './models/account.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'oneAccount' })
  getOneAccount(@Payload() payload: any): Promise<AccountType> {
    // TS is OK with return type being only InternType, even if appService.getOneIntern returns InternType or null
    // eslint-disable-next-line prettier/prettier
    // Logger.log('[AppController>getOneIntern] payload = ' + payload + ', payload.id = ' + payload.id)
    return this.appService.getOneAccount(payload); // + is the unary operator equivalent to parseInt or parseFloat
  }

  @MessagePattern({ cmd: 'allAccounts' })
  getAllInterns(): Promise<Array<AccountType>> {
    return this.appService.getAllAccounts();
  }

  @MessagePattern({ cmd: 'login' })
  login(@Payload() data: any): Promise<AccountType> {
    const email: string = data.email;
    const password: string = data.pwd;
    return this.appService.canLogin(email, password);
  }
}
