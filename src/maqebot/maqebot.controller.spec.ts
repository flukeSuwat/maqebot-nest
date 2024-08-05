import { Test, TestingModule } from '@nestjs/testing';
import { MaqeBotController } from './maqebot.controller';

describe('MaqeBotController', () => {
  let controller: MaqeBotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaqeBotController],
    }).compile();

    controller = module.get<MaqeBotController>(MaqeBotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
