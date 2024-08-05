import { Module } from '@nestjs/common';
import { MaqeBotModule } from './maqebot/maqebot.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MaqeBotModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
