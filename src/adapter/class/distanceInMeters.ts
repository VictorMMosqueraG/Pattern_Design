import { IDistanceInMeter } from "../interface/distance.interface";

export class DistanceInMetersImpl implements IDistanceInMeter {

    distance:number;

    constructor(distance:number) {
        this.distance = distance;
    }

    getDistance() {
        return this.distance;
    }
    

}
