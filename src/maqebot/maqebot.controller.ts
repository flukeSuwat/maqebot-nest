import { Controller, Get, Query } from '@nestjs/common';
import { MaqeBotService } from './maqebot.service';

@Controller('maqebot')
export class MaqeBotController {
  constructor(private readonly maqebotService: MaqeBotService) {}

  @Get()
  processCommands(@Query('commands') commands: string): string {
    if (!commands) {
      return 'Maqebot Hi';
    }
    return this.maqebotService.processCommands(commands);
  }
}
