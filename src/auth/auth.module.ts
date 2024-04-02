import { Module } from '@nestjs/common';
import { AuthController } from './infrastructure/in/controller/auth.controller';
import { GoogleStrategy } from './infrastructure/in/strategy/google.strategy';

@Module({
  controllers: [AuthController],
  providers: [GoogleStrategy],
})
export class AuthModule {}
