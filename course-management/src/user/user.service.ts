import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { newUser } from './create.user';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>, // private adminService: AdminService,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
  findOne(id: number): Promise<UserEntity> {
    return this.userRepository.findOneOrFail(id);
  }
  async findByTitle(name: string): Promise<UserEntity[]> {
    const data = await this.userRepository.find();
    const filterData = data.filter((index) => index.name.includes(name));
    return filterData;
  }
  createUser(createUser: newUser): Promise<UserEntity> {
    const newUser = this.userRepository.create(createUser);
    return this.userRepository.save(newUser);
  }
}
