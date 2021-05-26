import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { userResolver } from './User.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { AdminModule } from '../admin/admin.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, userResolver],
  exports: [UserService],
})
export class UserModule {}
