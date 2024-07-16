import { IButton } from "src/abstract_factory/interface/Button.interface";

export class WindowsButton implements IButton{
    paint(): void {
        console.log("Rendering a button in Windows style.");
    }
}