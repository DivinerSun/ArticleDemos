import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloGet(): string {
    return 'Hello Nest With Get Method !';
  }

  getHelloPost(): string {
    return 'Hello Nest With Post Method !';
  }
}
