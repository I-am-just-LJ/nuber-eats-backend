/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => String)
  name: string;
  @Field((type) => Boolean, { nullable: true })
  isVegan?: boolean;
  @Field((type) => String)
  address: string;
  @Field((type) => String)
  ownersName: string;
}
