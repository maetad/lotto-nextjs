import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AgentController } from './agent.controller';
import { AgentService } from './agent.service';
import { Agent } from './entities/agent.entity';

const mockAgent = new Agent();
mockAgent.id = 1;
mockAgent.name = 'Maetad';
mockAgent.createdAt = new Date();

describe('AgentController', () => {
  let controller: AgentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgentController],
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

    controller = module.get<AgentController>(AgentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
