import { IsNumber, IsOptional, IsString } from 'class-validator';

export class MeasuresHomeDto {
  @IsString()
  placeName: string;

  @IsNumber()
  temperature: number;

  @IsOptional()
  @IsNumber()
  humidity?: number;
}
