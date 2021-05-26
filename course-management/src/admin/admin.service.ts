import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AdminEntity } from './admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { newAdmin } from './create.admin';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/user.entity';
import { filter } from 'rxjs/operators';
@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
    private userService: UserService,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<AdminEntity[]> {
    return this.adminRepository.find();
  }
  findOne(id: number): Promise<AdminEntity> {
    return this.adminRepository.findOneOrFail(id);
  }
  createAdmin(createAdmin: newAdmin): Promise<AdminEntity> {
    const newAdmin = this.adminRepository.create(createAdmin);
    return this.adminRepository.save(newAdmin);
  }
  getUser(userId: number): Promise<UserEntity> {
    return this.userService.findOne(userId);
  }
  async searchAdminByTitle(name: string): Promise<AdminEntity[]> {
    try {
      const data = await this.adminRepository.find();
      const filterData = data.filter((index) => index.name.includes(name));
      if (filterData === undefined || filterData.length == 0) {
        throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
      }
      return filterData;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async searchUserByTitle(name: string): Promise<UserEntity[]> {
    try {
      const data = await this.userRepository.find();
      const filterData = data.filter((index) => index.name.includes(name));
      if (filterData === undefined || filterData.length == 0) {
        throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
      }
      return filterData;
    } catch (error) {
      return error;
    }
  }
}
