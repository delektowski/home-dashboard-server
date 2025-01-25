import { Module } from '@nestjs/common';
import { MeasuresHomeController } from './measures-home/measures-home.controller';
import { MeasuresHomeService } from './measures-home/services/measures-home.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MeasuresHomeEntity,
  MeasuresHomeSchema,
} from './measures-home/schemas/measures-home.schema';
import { MeasuresHomeResolver } from './measures-home/measures-home.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MeasuresHomeEntity.name, schema: MeasuresHomeSchema },
    ]),
  ],
  controllers: [MeasuresHomeController],
  providers: [MeasuresHomeService, MeasuresHomeResolver],
})
export class MeasuresModule {}
