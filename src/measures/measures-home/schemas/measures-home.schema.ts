import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MeasuresHomeDocument = HydratedDocument<MeasuresHomeEntity>;

@Schema()
export class MeasuresHomeEntity {
  @Prop({ required: true })
  placeName: string;

  @Prop({ required: true })
  temperature: number;

  @Prop()
  humidity: number;
}

export const MeasuresHomeSchema = SchemaFactory.createForClass(MeasuresHomeEntity);
