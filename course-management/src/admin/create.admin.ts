import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class newAdmin {
  @Field()
  name: string;

  @Field()
  password: string;

  @Field((type) => Int)
  userId: number;

  @Field({ nullable: true })
  type?: string;
}
