import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Location {
  @Field()
  title: string;
}
