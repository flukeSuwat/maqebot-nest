import { Module } from '@nestjs/common';
import { SuwatController } from './suwat.controller';
import { SuwatService } from './suwat.service';

@Module({
  controllers: [SuwatController],
  providers: [SuwatService],
})
export class SuwatModule {}
