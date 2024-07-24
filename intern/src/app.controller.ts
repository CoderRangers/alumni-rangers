import { Controller, Logger } from '@nestjs/common'
import { AppService } from './app.service'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { InternType } from './models/intern.type'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'oneIntern' })
  getOneIntern(@Payload() payload: any): InternType {
    // TS is OK with return type being only InternType, even if appService.getOneIntern returns InternType or null
    // eslint-disable-next-line prettier/prettier
    // Logger.log('[AppController>getOneIntern] payload = ' + payload + ', payload.id = ' + payload.id)
    return this.appService.getOneIntern(+payload) // + is the unary operator equivalent to parseInt or parseFloat
  }

  @MessagePattern({ cmd: 'allInterns' })
  getAllInterns(): Array<InternType> {
    return this.appService.getAllInterns()
  }

  @MessagePattern({ cmd: 'hello' })
  getHello(): string {
    return this.appService.getHello()
  }
}
