import { Device } from "../interface/device";
import { BasicRemote } from "./basicRemote";

export class AdvancedRemote extends BasicRemote {
    constructor(device: Device) {
        super(device);
    }

    mute(): void {
        this.device.setVolume(0);
    }
}