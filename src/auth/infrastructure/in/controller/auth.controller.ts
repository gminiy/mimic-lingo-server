import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from '../guard/google-auth.guard';

@Controller('auth')
export class AuthController {
  @Get('/google-login')
  @UseGuards(GoogleAuthGuard)
  async googleAuth() {
    return;
  }
}
