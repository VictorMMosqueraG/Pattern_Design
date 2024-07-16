import { IButton } from "src/abstract_factory/interface/Button.interface";
import { ICheckBox } from "src/abstract_factory/interface/CheckBox.interface";
import { MacButton } from "../normalClass/Mac/MacButton";
import { IFactory } from "src/abstract_factory/interface/Factory";
import { MacCheckbox } from "../normalClass/Mac/MacCheckBox";

export class MacFactory implements IFactory {
    createButton():IButton {
        return new MacButton();
    }

    createCheckbox(): ICheckBox {
        return new MacCheckbox();
    }
}