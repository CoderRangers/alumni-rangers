import { Injectable, Logger } from '@nestjs/common'
import { AppRepository } from './app.repository'
import { InternType } from './models/intern.type'

@Injectable()
export class AppService {
  private _repo: AppRepository

  constructor() {
    this._repo = new AppRepository()
  }

  getOneIntern(id: number): InternType | null {
    // eslint-disable-next-line prettier/prettier
    // Logger.log('[AppService>getOneIntern] id = ' + id + ', typeof id = ' + typeof(id))
    return this._repo.getOneIntern(id)
  }

  getAllInterns(): Array<InternType> {
    return this._repo.findAll()
  }

  getHello(): string {
    return 'Hello World!'
  }
}
