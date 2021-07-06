import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DrawService } from './draw.service';
import { Draw } from './entities/draw.entity';

const mockDraw = new Draw();
mockDraw.id = 1;
mockDraw.date = new Date();
mockDraw.createdAt = new Date();
mockDraw.updatedAt = new Date();

describe('DrawService', () => {
  let service: DrawService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<DrawService>(DrawService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
