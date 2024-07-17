import { Module } from '@nestjs/common';
import { AdapterService } from './adapter.service';
import { AdapterController } from './adapter.controller';
import { DistanceInFeet } from './class/distanceInFeet';
import { DistanceInMetersImpl } from './class/distanceInMeters';

@Module({
  controllers: [AdapterController],
  providers: [AdapterService,DistanceInFeet,DistanceInMetersImpl],
})
export class AdapterModule {}
