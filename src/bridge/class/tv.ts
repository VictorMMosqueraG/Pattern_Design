import { Device } from "../interface/device";

export class TV implements Device {
    turnOn(): void {
        console.log('TV is now ON');
    }

    turnOff(): void {
        console.log('TV is now OFF');
    }

    setVolume(volume: number): void {
        console.log(`TV volume set to ${volume}`);
    }
}