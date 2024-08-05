import { Module } from '@nestjs/common';
import { MaqeBotModule } from './maqebot/maqebot.module';
import { SuwatModule } from './suwat/suwat.module';

@Module({
  imports: [
    MaqeBotModule,
    SuwatModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
