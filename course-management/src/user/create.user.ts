import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class newUser {
  @Field()
  name: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  type?: string;

  // @Field((type) => Int)
  // adminId: number;
}
