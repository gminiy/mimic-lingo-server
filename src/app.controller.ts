import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getLoginTestHtml(): string {
    return `
    <h1>Log in</h1>
    <a href="/auth/google-login">Log in</a>
    `;
  }
}
