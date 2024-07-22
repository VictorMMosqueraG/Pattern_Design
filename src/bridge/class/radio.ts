import { Device } from "../interface/device";

export class Radio implements Device {
    turnOn(): void {
        console.log('Radio is now ON');
    }

    turnOff(): void {
        console.log('Radio is now OFF');
    }

    setVolume(volume: number): void {
        console.log(`Radio volume set to ${volume}`);
    }
}