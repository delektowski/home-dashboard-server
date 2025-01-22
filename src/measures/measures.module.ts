import { Module } from '@nestjs/common';
import { MeasuresHomeController } from './measures-home/measures-home.controller';
import { MeasuresHomeService } from './measures-home/services/measures-home.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MeasuresHome,
  MeasuresHomeSchema,
} from './measures-home/schemas/measures-home.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MeasuresHome.name, schema: MeasuresHomeSchema },
    ]),
  ],
  controllers: [MeasuresHomeController],
  providers: [MeasuresHomeService],
})
export class MeasuresModule {}
