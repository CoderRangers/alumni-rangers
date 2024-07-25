import { Controller, Get, Param, Res } from '@nestjs/common'
import { AccountService } from './account.service'
import { Observable, take } from 'rxjs'
import { AccountType } from './model/account-type'
import { Response } from 'express'

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Get()
    findAll(): Observable<Array<AccountType>> {
        return this.accountService.findAll().pipe(take(1))
    }

    @Get(':email')
    findOne(@Param('email') email: string, @Res() res: Response) {
        const typeEmail: string = email
        return this.accountService
            .findOne(typeEmail)
            .pipe(take(1))
            .subscribe({
                next: (response: any) => {
                    if (response) {
                        res.status(200).send(response)
                    } else {
                        res.status(404).send()
                    }
                },
                error: (error: any) => {
                    res.status(500).send(error)
                },
            })
    }
}
