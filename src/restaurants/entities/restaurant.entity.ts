import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => String)
  @Column()
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Boolean, { nullable: true })
  @Column()
  isVegan?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => String)
  @Column()
  address: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => String)
  @Column()
  ownersName: string;
}
