import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { MeasuresHomeService } from './services/measures-home.service';
import { MeasuresHomeModel } from './models/measures-home.model';
import { MeasuresHomeInput } from './models/measures-home-input.model';
import { MeasuresHomeEntity } from './schemas/measures-home.schema';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() => MeasuresHomeModel)
export class MeasuresHomeResolver {
  constructor(private readonly measuresHomeService: MeasuresHomeService) {}

  @Query(() => [MeasuresHomeModel], {
    name: 'getMeasuresHome',
    description: 'Provides a measures data according to the place name',
    nullable: true,
  })
  async getMeasuresHome(
    @Args('placeName', {
      description: 'Place name where measure device is',
      nullable: false,
    })
    placeName: string,
  ) {
    return this.measuresHomeService.getMeasuresHome(placeName);
  }

  @Mutation(() => MeasuresHomeModel)
  async createMeasuresHome(
    @Args('measuresHomeData') measuresHomeData: MeasuresHomeInput,
  ) {
    const createdAt = new Date();
    const createdMeasuresHome = await this.measuresHomeService.createMeasuresHome({ ...measuresHomeData, createdAt });
    await pubSub.publish('measuresHomeAdded', { measuresHomeAdded: createdMeasuresHome });
    return createdMeasuresHome;
  }

  @Subscription(() => MeasuresHomeModel)
  measuresHomeAdded() {
    return pubSub.asyncIterableIterator('measuresHomeAdded');
  }
}
