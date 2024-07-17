

export class DistanceInFeet {
    private distance:number;

    constructor(distance:number) {
        this.distance = distance;
    }

    public getDistanceInFeet():number {
        return this.distance;
    }
}