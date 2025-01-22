import { Injectable } from '@nestjs/common';
import { MeasuresHomeDto } from '../dto/measures-home.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MeasuresHome } from '../schemas/measures-home.schema';
import { Model } from 'mongoose';

@Injectable()
export class MeasuresHomeService {
  constructor(
    @InjectModel(MeasuresHome.name)
    private measuresHomeModel: Model<MeasuresHome>,
  ) {}

  async createMeasuresHome(
    measuresHomeDto: MeasuresHomeDto,
  ): Promise<MeasuresHome> {
    const createMeasuresHome = new this.measuresHomeModel(measuresHomeDto);
    return createMeasuresHome.save();
  }
}
