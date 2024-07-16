import { IButton } from './../../interface/Button.interface';
import { IFactory } from "src/abstract_factory/interface/Factory";
import { WindowsButton } from "../normalClass/windows/WindowsButton";
import { ICheckBox } from 'src/abstract_factory/interface/CheckBox.interface';
import { WindowsCheckbox } from '../normalClass/windows/WindowsCheckBox';

export class WindowsFactory implements IFactory {
    createButton(): IButton {
        return new WindowsButton();
    }

    createCheckbox(): ICheckBox {
        return new WindowsCheckbox();
    }
}