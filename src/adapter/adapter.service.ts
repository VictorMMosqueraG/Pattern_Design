import { DistanceInMetersImpl } from './class/distanceInMeters';
import { DistanceInFeet } from './class/distanceInFeet';
import { Injectable, Controller } from '@nestjs/common';

@Injectable()
export class AdapterService {


    public logic(){

        const distanceInMeter = new DistanceInMetersImpl(328);
        console.log("------------------------------------------------------------------");
        console.log(`The distance in meters is ${distanceInMeter.getDistance()}`);
        const distanceInFeet = new DistanceInFeet(100);
        console.log("------------------------------------------------------------------");
        console.log(`The distance in feet is ${distanceInFeet.getDistanceInFeet()}`);
        console.log("------------------------------------------------------------------");
    }
}
