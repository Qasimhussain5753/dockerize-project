import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { adminResolver } from './admin.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/user.entity';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([AdminEntity, UserEntity])],
  providers: [AdminService, UserService, adminResolver],
  exports: [AdminService],
})
export class AdminModule {}
