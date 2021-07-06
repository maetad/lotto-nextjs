import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AgentService } from './agent.service';
import { Agent } from './entities/agent.entity';

const mockAgent = new Agent();
mockAgent.id = 1;
mockAgent.name = 'Maetad';
mockAgent.createdAt = new Date();

describe('AgentService', () => {
  let service: AgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AgentService,
        {
          provide: getRepositoryToken(Agent),
          useValue: {
            find: jest.fn().mockResolvedValue([mockAgent]),
          },
        },
      ],
    }).compile();

    service = module.get<AgentService>(AgentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
