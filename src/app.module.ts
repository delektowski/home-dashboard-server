import { Module } from '@nestjs/common';
import { MeasuresModule } from './measures/measures.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://user:pass@localhost:27017/home_dashboard?authSource=admin',
    ),
    MeasuresModule,
  ],
})
export class AppModule {}
