import { Extensions, Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { loggerMiddleware } from '../user/field-middleware/user.middleware';
import { UserEntity } from '../user/user.entity';

@Entity()
@ObjectType()
export class AdminEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field({ middleware: [loggerMiddleware] })
  @Extensions({ role: 'ADMIN' })
  password: string;

  @Field()
  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @Column()
  @Field((type) => Int)
  userId: number;

  @OneToMany(() => UserEntity, (UserEntity) => UserEntity.admin)
  @Field((type) => [UserEntity], { nullable: true })
  user?: UserEntity[];
}
