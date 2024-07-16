import { MacFactory } from './class/factoryClass/MacFactory';
import { Injectable } from '@nestjs/common';
import { WindowsFactory } from './class/factoryClass/WindowsFactory';
import { IFactory } from './interface/Factory';

@Injectable()
export class AbstractFactoryService {

    public logic(factory: IFactory){
        const button = factory.createButton();
        const checkbox = factory.createCheckbox();
    
        button.paint();
        checkbox.check();
    }
}
