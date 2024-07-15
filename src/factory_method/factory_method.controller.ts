import { RoadLogistic } from './class/RoadLogistics';
import { Controller, Get } from '@nestjs/common';
import { FactoryMethodService } from './factory_method.service';

@Controller('factory-method')
export class FactoryMethodController {
  constructor(
    private readonly factoryMethodService: FactoryMethodService,
    private readonly roadLogistic:RoadLogistic
  ) {}

  
  @Get()
  logic(){
    return this.factoryMethodService.logic();
  }
}
