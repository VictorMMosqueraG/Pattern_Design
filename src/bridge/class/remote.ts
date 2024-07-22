import { Device } from "../interface/device";

export abstract class Remote {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    abstract togglePower(): void;
    abstract volumeUp(): void;
    abstract volumeDown(): void;
}