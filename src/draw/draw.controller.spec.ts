import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DrawController } from './draw.controller';
import { DrawService } from './draw.service';
import { Draw } from './entities/draw.entity';

const mockDraw = new Draw();
mockDraw.id = 1;
mockDraw.date = new Date();
mockDraw.createdAt = new Date();
mockDraw.updatedAt = new Date();

describe('DrawController', () => {
  let controller: DrawController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DrawController],
      providers: [
        DrawService,
        {
          provide: getRepositoryToken(Draw),
          useValue: {
            find: jest.fn().mockResolvedValue([mockDraw]),
          },
        },
      ],
    }).compile();

    controller = module.get<DrawController>(DrawController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
