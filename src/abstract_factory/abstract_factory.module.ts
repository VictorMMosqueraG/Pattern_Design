import { Module } from '@nestjs/common';
import { AbstractFactoryService } from './abstract_factory.service';
import { AbstractFactoryController } from './abstract_factory.controller';
import { WindowsFactory } from './class/factoryClass/WindowsFactory';
import { MacFactory } from './class/factoryClass/MacFactory';

@Module({
  controllers: [AbstractFactoryController],
  providers: [AbstractFactoryService,WindowsFactory,MacFactory],
})
export class AbstractFactoryModule {}
