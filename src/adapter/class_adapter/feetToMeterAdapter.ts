import { DistanceInFeet } from './../class/distanceInFeet';
import { IDistanceInMeter } from "../interface/distance.interface";

class FeetToMetersAdapter implements IDistanceInMeter {

    private constructor(
        readonly distanceInFeet:DistanceInFeet
    ){}

    public getDistance() {
        // Convert feet to meters (1 foot = 0.3048 meters)
        return this.distanceInFeet.getDistanceInFeet() * 0.3048;
    }
}