import { Controller, Get} from '@nestjs/common';
import { AbstractFactoryService } from './abstract_factory.service';
import { MacFactory } from './class/factoryClass/MacFactory';
import { WindowsFactory } from './class/factoryClass/WindowsFactory';

@Controller('abstract-factory')
export class AbstractFactoryController {
  
  constructor(
    private readonly abstractFactoryService: AbstractFactoryService
  ) {}

  @Get()
  public logic(){
    console.log("-------------------------------------")
    const macFactory = new MacFactory();
    this.abstractFactoryService.logic(macFactory);
    console.log("-------------------------------------")
    const windowsFactory = new WindowsFactory();  
    this.abstractFactoryService.logic(windowsFactory);
    console.log("-------------------------------------")
  }
}
