/* eslint-disable prettier/prettier */
import { Controller, Get, Logger, Param, Res } from '@nestjs/common'
import { InternService } from './intern.service'
import { InternType } from './models/intern.type'
import { Observable, take } from 'rxjs'
import { Response } from 'express'

@Controller('intern')
export class InternController {
    constructor(private _service: InternService) {}

    @Get() // defines that the endpoint GET http://localhost:3000/intern, consumes the findAll() method
    findAll(): Observable<Array<InternType>> {
        return this._service.findAll().pipe(
            take(1) // autre façon d'arrêter d'observer après
        )
    }

    @Get(':id') // GET  http://localhost:3000/intern/<id>
    findOne(@Param('id') id: string, @Res() res: Response) {
        const typedId: number = +id
        // Logger.log('id: ' + id)

        return this._service
            .findOne(typedId)
            .pipe( // j'enchaine les opérations sur l'observable, retourné par findOne()
                take(1) // dès que j'ai reçu une réponse (la 1re), je unsubscribe à l'observer, mais je ne traite pas la réponse/donnée reçue
            )
            .subscribe({ // je traite la réponse/donnée reçue (dans ce cas, la 1re reçue)
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
