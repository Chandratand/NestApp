import { Controller, Get } from '@nestjs/common';

@Controller('/user')
export class UserController {
  @Get()
  getUser() {
    return 'i AM from user conttoler';
  }
}
