import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { User } from './users.model';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'create user' })
  @ApiResponse({ status: 201, type: User })
  @Post()
  async create(@Body() userDto: UserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'request all user' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  async getAll() {
    return await this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'request one user' })
  @ApiResponse({ status: 200, type: User })
  @Get('user')
  async getOne(@Body() address: UserDto) {
    return this.usersService.getOneUser(address);
  }

  @ApiOperation({ summary: 'delete all users' })
  @ApiResponse({ status: 200, type: User })
  @Delete()
  async deleteAll() {
    return this.usersService.deleteAllUsers();
  }

  @ApiOperation({ summary: 'delete one user' })
  @ApiResponse({ status: 200, type: User })
  @Delete('user')
  async deleteOne(@Body() address: UserDto) {
    return this.usersService.deleteOneUser(address);
  }
}
