import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserCreateDto, UserValidDto } from './user.dto';
import { DbException } from '@app/exceptions';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async getAllUsers(): Promise<UserEntity[]> {
    try {
      return this.userRepository.find();
    } catch (e) {
      DbException(e, UserEntity.toString());
    }
  }
  async createUser(userCreate: UserCreateDto): Promise<UserEntity> {
    try {
      return await this.userRepository.save(userCreate);
    } catch (e) {
      DbException(e, UserEntity.toString());
    }
  }
  async getUser(user: UserValidDto): Promise<UserEntity> {
    try {
      return await this.userRepository.findOne({ where: { ...user } });
    } catch (e) {
      DbException(e, UserEntity.toString());
    }
  }
}
