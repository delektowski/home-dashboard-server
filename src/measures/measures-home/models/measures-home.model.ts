import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MeasuresHomeModel {
  @Field({ description: 'Name of the place where measure device is' })
  placeName: string;

  @Field((type) => Float, {
    description: 'Temperature value',
  })
  temperature: number;

  @Field((type) => Float, {
    description: 'Humidity value',
    nullable: true,
  })
  humidity: number;
}
