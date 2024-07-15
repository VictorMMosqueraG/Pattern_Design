import { RoadLogistic } from './class/RoadLogistics';
import { SeaLogistic } from './class/SeaLogistics';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FactoryMethodService {

    constructor(
        private readonly seaLogistic:SeaLogistic,
        private readonly roadLogistic:RoadLogistic 
    ){}

    
    public logic(){
        console.log("---------------------------------");
        console.log(this.seaLogistic.createTransports());
        console.log(this.seaLogistic.planDelivery());
        console.log("---------------------------------");
        console.log(this.roadLogistic.createTransports());
        console.log(this.roadLogistic.planDelivery());
        console.log("---------------------------------");
    }
}
