import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Max, Min } from 'class-validator';

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
