import { Extensions, Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { loggerMiddleware } from './field-middleware/user.middleware';
import { AdminEntity } from '../admin/admin.entity';
@Entity()
@ObjectType()
export class UserEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field({ middleware: [loggerMiddleware] })
  @Extensions({ role: 'USER' })
  password: string;

  @Field()
  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @ManyToOne(() => AdminEntity, (AdminEntity) => AdminEntity.user)
  @Field((type) => AdminEntity)
  admin: AdminEntity;
}
