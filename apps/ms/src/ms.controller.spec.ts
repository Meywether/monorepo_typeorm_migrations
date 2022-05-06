import { Test, TestingModule } from '@nestjs/testing';
import { MsController } from './ms.controller';
import { MsService } from './ms.service';

describe('MsController', () => {
  let msController: MsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsController],
      providers: [MsService],
    }).compile();

    msController = app.get<MsController>(MsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msController.getHello()).toBe('Hello World!');
    });
  });
});
