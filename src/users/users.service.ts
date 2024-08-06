import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOneUsername(username: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { username } });
  }
  
  async create(createUserDto: CreateUserDto) {
    const { password, ...rest } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.userRepository.create({
      ...rest,
      password: hashedPassword,
    });

    return await this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOneBy({ id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let user = await this.userRepository.findOneBy({ id: id });
    user = {
      ...user,
      ...updateUserDto,
    };
    const toUpdate = await this.userRepository.save(user);
    return toUpdate;
  }

  async remove(id: string) {
    return await this.userRepository.delete(id);
  }
}
