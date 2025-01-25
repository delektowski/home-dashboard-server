import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MeasuresHomeDocument = HydratedDocument<MeasuresHomeEntity>;

@Schema()
export class MeasuresHomeEntity {
  @Prop({ type: Types.ObjectId, auto: true })
  _id: Types.ObjectId;
  @Prop({ required: true })
  placeName: string;

  @Prop({ required: true })
  temperature: number;

  @Prop()
  humidity: number;
}

export const MeasuresHomeSchema = SchemaFactory.createForClass(MeasuresHomeEntity);
