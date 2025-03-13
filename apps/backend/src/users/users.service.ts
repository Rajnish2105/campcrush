import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  findAll() {
    return [
      //dummy data for testing
      {
        id: 1,
        name: 'Rajnish Kumar',
        roll_number: 210151520034,
        course: 'B.Tech',
        class: 'ECE',
        year: 4,
        hobbies: ['music', 'singing', 'video games', 'anime'],
      },
      {
        id: 1,
        name: 'Riya',
        roll_number: 210151520035,
        course: 'B.Tech',
        class: 'ECE',
        year: 4,
        hobbies: ['Bhiari', 'Chamar', 'Dhedh', 'randi-panti'],
      },
    ];
  }

  createUser(userData: CreateUserDto) {
    return { message: 'a new user has been created', data: userData };
  }
}
