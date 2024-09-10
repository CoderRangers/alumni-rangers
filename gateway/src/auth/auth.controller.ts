import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  SetMetadata,
  Request,
  Res,
  UseGuards,
  Logger,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { AuthGuard } from './auth.guard';
import { LogType } from 'src/account/model/log-type';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @SetMetadata('isPublic', true)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: LogType, @Res() res: Response) {
    this.authService
      .signIn(signInDto.email, signInDto.pwd)
      .then((response) => {
        if (response) {
          res.status(HttpStatus.OK).send(response);
        } else {
          res.status(HttpStatus.UNAUTHORIZED).send();
        }
      })
      .catch((error) => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
      });
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user; // simulate some request returning some data
  }

  @Post('token-check')
  tokenCheck(@Body() data: any) {
    /* Logger.log(
      `AuthController.tokenCheck(data): data: ${JSON.stringify(data)}`,
    ); */
    return this.authService.tokenCheck(data.access_token);
  }
}
