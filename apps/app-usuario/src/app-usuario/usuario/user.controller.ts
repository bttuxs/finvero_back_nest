import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto, UserValidDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAllUser() {
    return this.userService.getAllUsers();
  }

  @Get('id')
  getUser(@Query() email: UserValidDto) {
    return this.userService.getUser(email);
  }

  @Post()
  async createUser(@Body() createUser: UserCreateDto) {
    return await this.userService.createUser(createUser);
  }
}
