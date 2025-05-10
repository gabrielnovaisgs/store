import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderServiceService {
  createOrder(): string {
    return 'Hello World!';
  }
}
