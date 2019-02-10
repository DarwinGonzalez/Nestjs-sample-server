import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNew(): any {
    return {
      success: 200,
      data: "Hello NestJS!"
    };
  }
}
