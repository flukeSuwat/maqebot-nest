import { Test, TestingModule } from '@nestjs/testing';
import { SuwatController } from './suwat.controller';

describe('SuwatController', () => {
  let controller: SuwatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuwatController],
    }).compile();

    controller = module.get<SuwatController>(SuwatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
