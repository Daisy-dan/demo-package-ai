import { Injectable } from '@nestjs/common';
import { invoke } from './fundamentals/insight';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async insight() {
    return await invoke();
  }
}
