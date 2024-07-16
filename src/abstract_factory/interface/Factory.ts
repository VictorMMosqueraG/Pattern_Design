import { IButton } from "./Button.interface";
import { ICheckBox } from "./CheckBox.interface";

export interface IFactory {
    createButton(): IButton;
    createCheckbox(): ICheckBox;
}