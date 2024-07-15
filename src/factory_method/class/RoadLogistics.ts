import { ILogistics } from "../interface/Logistics.interface";

export class RoadLogistic implements ILogistics{

    planDelivery() {
        return "delivery for road and for box";
    }

    createTransports() {
       return "truck";
    }
}