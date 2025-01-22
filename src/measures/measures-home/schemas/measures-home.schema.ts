import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MeasuresHomeDocument = HydratedDocument<MeasuresHome>;

@Schema()
export class MeasuresHome {
  @Prop({ required: true })
  placeName: string;

  @Prop({ required: true })
  temperature: number;

  @Prop()
  humidity: number;
}

export const MeasuresHomeSchema = SchemaFactory.createForClass(MeasuresHome);
