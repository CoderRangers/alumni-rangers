/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { InternService } from './intern.service';
import { InternType } from './models/intern.type';
import { Observable, take } from 'rxjs';
import { Response } from 'express';
import { CreateInternDto } from './models/create-intern.dto';

@Controller('api/v1/intern')
export class InternController {
  constructor(
    private _service: InternService
  ) {}

  @Get() // GET http://localhost:3000/api/v1/intern
  findAll(): Observable<Array<InternType>> {
    return this._service.findAll()
      .pipe(
        take(1) // Autre façon d(arrêter d'observer)
      );
  }

  @Get(':id') // GET http://localhost:3000/api/v1/intern/{id}
  findOne(@Param('id') id: number, @Res() res: Response): void {
    this._service.findOne(id)
      .pipe(take(1))
      .subscribe({
        next: (response: InternType | null) => {
          if (response) {
            res.status(HttpStatus.OK).send(response)
          }
          else {
            res.status(404).send()
          }
        },
        error: (error: any) => {
          res.status(500).send(error)
        }
      })
  }

  @Post() // POST http://localhost:3000/api/v1/intern/
  addIntern(@Body() intern: CreateInternDto, @Res() res: Response): void {
    this._service.addIntern(intern).pipe(
      take(1)
    )
    .subscribe({
      next: (response: CreateInternDto) => {
        if (response) {
          res.status(HttpStatus.OK).send(response)
        }
        else {
          res.status(HttpStatus.BAD_REQUEST).send()
        }
      },
      error: (error: any) => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error)
      }
    })
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response): void {
    this._service.removeOne(id)
    .pipe(take(1))
    .subscribe({
      next: (response: CreateInternDto | null) => {
        if (response) {
          res.status(HttpStatus.OK).send(response)
        }
        else {
          res.status(404).send()
        }
      },
      error: (error: any) => {
        res.status(500).send(error)
      }
    })
  }
}
