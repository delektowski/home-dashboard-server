import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MeasuresHomeService } from './services/measures-home.service';
import { MeasuresHomeModel } from './models/measures-home.model';
import { MeasuresHomeInput } from './models/measures-home-input.model';

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
    return this.measuresHomeService.createMeasuresHome(measuresHomeData);
  }
}
