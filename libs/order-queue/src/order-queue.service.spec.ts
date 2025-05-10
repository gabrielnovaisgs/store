import { Test, TestingModule } from '@nestjs/testing';
import { OrderQueueService } from './order-queue.service';

describe('OrderQueueService', () => {
  let service: OrderQueueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderQueueService],
    }).compile();

    service = module.get<OrderQueueService>(OrderQueueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
