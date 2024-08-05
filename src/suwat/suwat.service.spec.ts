import { Test, TestingModule } from '@nestjs/testing';
import { SuwatService } from './suwat.service';

describe('SuwatService', () => {
  let service: SuwatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuwatService],
    }).compile();

    service = module.get<SuwatService>(SuwatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
