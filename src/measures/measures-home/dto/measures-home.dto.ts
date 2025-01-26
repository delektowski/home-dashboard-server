import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { Types } from 'mongoose';

export class MeasuresHomeDto {
  @IsNumber()
  id?: string;

  @IsString()
  placeName: string;

  @IsNumber()
  @Min(-50)
  @Max(50)
  temperature: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  humidity?: number;
}
