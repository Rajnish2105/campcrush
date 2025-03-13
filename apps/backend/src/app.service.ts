import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {
    data: string;
    name: string;
    class: string;
    year: number;
    hobbies: string[];
  } {
    return {
      data: 'Hello World!',
      name: 'Rajnish',
      class: 'B.Tech',
      year: 4,
      hobbies: ['music', 'singing', 'video games', 'anime'],
    };
  }
}
