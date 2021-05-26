import {
  Args,
  Mutation,
  Int,
  Query,
  Resolver,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { AdminEntity } from './admin.entity';
import { newAdmin } from './create.admin';
import { UserEntity } from '../user/user.entity';

@Resolver((of) => AdminEntity)
export class adminResolver {
  constructor(private adminService: AdminService) {}
  @Query((returns) => AdminEntity)
  getAdminFindOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<AdminEntity> {
    try {
      return this.adminService.findOne(id);
    } catch (error) {
      console.log(error);
    }
  }

  @Query((returns) => [AdminEntity])
  getAdminAll(): Promise<AdminEntity[]> {
    return this.adminService.findAll();
  }

  @Mutation((returns) => AdminEntity)
  createAdmin(
    @Args('createAdmin') createAdmin: newAdmin,
  ): Promise<AdminEntity> {
    return this.adminService.createAdmin(createAdmin);
  }

  @ResolveField((returns) => UserEntity)
  getUser(@Parent() admin: AdminEntity): Promise<UserEntity> {
    return this.adminService.getUser(admin.userId);
  }

  @ResolveField((returns) => [UserEntity])
  search(
    @Args('name', { type: () => String }) name: string,
    @Parent() admin: AdminEntity,
  ): Promise<UserEntity[]> {
    return this.adminService.searchUserByTitle(name);
  }
  @Query((returns) => [AdminEntity])
  searchAdminByTitle(
    @Args('name', { type: () => String }) name: string,
  ): Promise<AdminEntity[]> {
    return this.adminService.searchAdminByTitle(name);
  }
}
