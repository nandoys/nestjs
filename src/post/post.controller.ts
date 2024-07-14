import { Controller, Get } from '@nestjs/common';

@Controller('post')
export class PostController {
  @Get()
  findAll(): string {
    return 'Hello post';
  }
}
