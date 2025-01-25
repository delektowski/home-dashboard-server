import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class MeasuresHomeDto {
  @IsOptional()
  _id?: Types.ObjectId;

  @IsString()
  placeName: string;

  @IsNumber()
  temperature: number;

  @IsOptional()
  @IsNumber()
  humidity?: number;
}
