import { Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './restaurant.entity';

@Resolver()
export class RestaurantsResolver {
  @Query(() => Restaurant)
  myRestaurant() {
    return true;
  }
}
