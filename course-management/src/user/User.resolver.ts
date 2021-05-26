import {
  Args,
  Mutation,
  Int,
  Query,
  Resolver,
  Parent,
  ResolveField,
  createUnionType,
  ComplexityEstimatorArgs,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { newUser } from './create.user';
import { AdminEntity } from '../admin/admin.entity';
import { ComplexityPlugin } from './complexity/user.complexity';
export const ResultUnion = createUnionType({
  name: 'ResultUnion',
  types: () => [UserEntity, AdminEntity],
  resolveType(value) {
    console.log(value);
    return value;
  },
});

@Resolver((of) => UserEntity)
export class userResolver {
  constructor(private userService: UserService) {}
  @Query((returns) => UserEntity)
  getUserFindOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<UserEntity> {
    try {
      return this.userService.findOne(id);
    } catch (error) {
      console.log(error);
    }
  }
  @Query((returns) => [UserEntity])
  findByTitle(
    @Args('name', { type: () => String }) name: string,
  ): Promise<UserEntity[]> {
    return this.userService.findByTitle(name);
  }
  @Query((returns) => [UserEntity], { deprecationReason: 'np', nullable: true })
  getUserAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Mutation((returns) => UserEntity)
  createNewUser(@Args('createUser') createUser: newUser): Promise<UserEntity> {
    return this.userService.createUser(createUser);
  }
}

// import {
//   Args,
//   Mutation,
//   Int,
//   Query,
//   Resolver,
//   Parent,
//   ResolveField,
// } from '@nestjs/graphql';
// import { UserService } from './user.service';
// import { UserEntity } from './user.entity';
// import { newUser } from './create.user';
// import { AdminEntity } from '../admin/admin.entity';
//
// @Resolver((of) => UserEntity)
// export class userResolver {
//   constructor(private userService: UserService) {}
//   @Query((returns) => UserEntity)
//   getUserFindOne(
//     @Args('id', { type: () => Int }) id: number,
//   ): Promise<UserEntity> {
//     try {
//       return this.userService.findOne(id);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   @Query((returns) => [UserEntity])
//   getUserAll(): Promise<UserEntity[]> {
//     return this.userService.findAll();
//   }
//   @Mutation((returns) => UserEntity)
//   createNewUser(@Args('createUser') createUser: newUser): Promise<UserEntity> {
//     return this.userService.createUser(createUser);
//   }
//   @ResolveField((returns) => AdminEntity)
//   getAdmin(@Parent() user: UserEntity): Promise<AdminEntity> {
//     return this.userService.getAdmin(user.adminId);
//   }
// }
