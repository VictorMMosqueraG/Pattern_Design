import { Controller, Get } from '@nestjs/common';
import { BridgeService } from './bridge.service';

@Controller('bridge')
export class BridgeController {
  constructor(private readonly bridgeService: BridgeService) {}

  @Get()
  public login(){
    return this.bridgeService.login();
  }
}
