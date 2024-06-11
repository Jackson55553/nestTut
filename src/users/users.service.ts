import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { UserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: UserDto) {
    console.log(dto.address);
    const oldUser = await this.userRepository.findOne({
      where: { address: dto.address },
    });
    if (!oldUser) {
      const user = await this.userRepository.create(dto);
      return user;
    } else {
      console.log('is already exist');
    }
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();
    return users.length;
  }

  async getOneUser(obj) {
    const user = await this.userRepository.findOne({
      where: { address: obj.address },
    });
    return user;
  }
  async deleteAllUsers() {
    const user = await this.userRepository.truncate();
    return user;
  }
  async deleteOneUser(obj) {
    const user = await this.userRepository.destroy({
      where: { address: obj.address },
    });
    return user;
  }
}
