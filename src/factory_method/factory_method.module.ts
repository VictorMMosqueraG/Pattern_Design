import { Module } from '@nestjs/common';
import { FactoryMethodService } from './factory_method.service';
import { FactoryMethodController } from './factory_method.controller';
import { RoadLogistic } from './class/RoadLogistics';
import { SeaLogistic } from './class/SeaLogistics';

@Module({
  controllers: [FactoryMethodController],
  providers: [FactoryMethodService,RoadLogistic,SeaLogistic],
})
export class FactoryMethodModule {}
