import { Injectable } from '@nestjs/common';

@Injectable()
export class MsService {
  getHello(): string {
    return 'Hello World!';
  }
}
