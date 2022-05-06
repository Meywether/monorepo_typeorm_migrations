import { Controller, Get } from '@nestjs/common';
import { MsService } from './ms.service';

@Controller()
export class MsController {
  constructor(private readonly msService: MsService) {}

  @Get()
  getHello(): string {
    return this.msService.getHello();
  }
}
