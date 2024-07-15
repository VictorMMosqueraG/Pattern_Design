import { ILogistics } from "../interface/Logistics.interface";

export class SeaLogistic implements ILogistics{
    planDelivery() {
        return "delivery for sea and for container"; 
    }
    createTransports() {
        return "boat";
    }

}