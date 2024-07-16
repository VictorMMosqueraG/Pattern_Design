import { ICheckBox } from "src/abstract_factory/interface/CheckBox.interface";

export class WindowsCheckbox implements ICheckBox {
    check(): void {
          console.log("Checking a checkbox in Windows style.");
    }
}