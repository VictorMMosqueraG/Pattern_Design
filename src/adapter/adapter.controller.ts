import { Controller, Get } from '@nestjs/common';
import { AdapterService } from './adapter.service';

@Controller('adapter')
export class AdapterController {
  constructor(private readonly adapterService: AdapterService) {}

 @Get()
 public logic(){
  return this.adapterService.logic();
 } 
}
