import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class MeasuresHomeInput {
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
  humidity?: number;
}
