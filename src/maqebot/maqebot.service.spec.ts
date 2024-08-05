import { Test, TestingModule } from '@nestjs/testing';
import { MaqeBotService } from './maqebot.service';

describe('MaqeBotService', () => {
  let service: MaqeBotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaqeBotService],
    }).compile();

    service = module.get<MaqeBotService>(MaqeBotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
