import { IButton } from "src/abstract_factory/interface/Button.interface";

export class MacButton implements IButton{

    paint(): void {
        console.log("Rendering a button in Mac style.");
    }
}