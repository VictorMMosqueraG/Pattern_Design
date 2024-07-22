import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactoryMethodModule } from './factory_method/factory_method.module';
import { AbstractFactoryModule } from './abstract_factory/abstract_factory.module';
import { AdapterModule } from './adapter/adapter.module';
import { BridgeModule } from './bridge/bridge.module';

@Module({
  imports: [FactoryMethodModule, AbstractFactoryModule, AdapterModule, BridgeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
