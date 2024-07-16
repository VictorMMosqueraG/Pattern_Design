import { ICheckBox } from "src/abstract_factory/interface/CheckBox.interface";

export class MacCheckbox implements ICheckBox {
    check(): void {
        console.log("Checking a checkbox in Mac style.");
    }
}