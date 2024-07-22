import { Remote } from "./remote";

export class BasicRemote extends Remote {
    private isOn: boolean = false;

    togglePower(): void {
        if (this.isOn) {
            this.device.turnOff();
        } else {
            this.device.turnOn();
        }
        this.isOn = !this.isOn;
    }

    volumeUp(): void {
        this.device.setVolume(10);
    }

    volumeDown(): void {
        this.device.setVolume(5);
    }
}