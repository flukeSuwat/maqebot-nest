import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto);
    const toCreate = await this.userRepository.insert(user);
    return toCreate;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({ id: id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let user = await this.userRepository.findOneBy({ id: id });
    user = {
      ...user,
      ...updateUserDto,
    };
    const toUpdate = await this.userRepository.save(user);
    return toUpdate;
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
