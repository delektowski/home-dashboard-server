import { Module } from '@nestjs/common';
import { MeasuresHomeController } from './measures-home/measures-home.controller';
import { MeasuresHomeService } from './measures-home/services/measures-home.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MeasuresHome,
  MeasuresHomeSchema,
} from './measures-home/schemas/measures-home.schema';
import { MeasuresHomeResolver } from './measures-home/measures-home.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MeasuresHome.name, schema: MeasuresHomeSchema },
    ]),
  ],
  controllers: [MeasuresHomeController],
  providers: [MeasuresHomeService, MeasuresHomeResolver],
})
export class MeasuresModule {}
