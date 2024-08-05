import { Module } from '@nestjs/common';
import { MaqeBotController } from './maqebot.controller';
import { MaqeBotService } from './maqebot.service';

@Module({
  controllers: [MaqeBotController],
  providers: [MaqeBotService],
})
export class MaqeBotModule {}
