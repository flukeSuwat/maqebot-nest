import { Controller, Get, Query } from '@nestjs/common';
import { SuwatService } from './suwat.service';

@Controller('suwat')
export class SuwatController {
  constructor(private readonly suwatService: SuwatService) {}

  @Get()
  processQuery(
    @Query('type') type: string,
    @Query('color') color: string,
    @Query('limit') limit: string,
  ): string {
    if (!type && !color && !limit) {
      return 'Suwat';
    }
    const limitNumber = parseInt(limit, 10);
    return this.suwatService.processRequest(type, color, limitNumber);
  }
}
