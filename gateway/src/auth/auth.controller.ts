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
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @SetMetadata('isPublic', true)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>, @Res() res: Response) {
    this.authService
      .signIn(signInDto.username, signInDto.password)
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

  @Get('token-check')
  tokenCheck(@Body() data: any) {
    return this.authService.tokenCheck(data.token);
  }
}
