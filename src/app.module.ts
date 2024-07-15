import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactoryMethodModule } from './factory_method/factory_method.module';

@Module({
  imports: [FactoryMethodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
