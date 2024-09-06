import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  SetMetadata,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @SetMetadata('isPublic', true)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  //@UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user; // simulate some request returning some data
  }
}
