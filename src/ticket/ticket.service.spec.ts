import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TicketService } from './ticket.service';
import { Ticket } from './entities/ticket.entity';

const mockTicket = new Ticket();
mockTicket.id = 1;
mockTicket.number = '123';
mockTicket.price = 'straight';
mockTicket.unit = 400;
mockTicket.createdAt = new Date();
mockTicket.updatedAt = new Date();

describe('TicketService', () => {
  let service: TicketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TicketService,
        {
          provide: getRepositoryToken(Ticket),
          useValue: {
            find: jest.fn().mockResolvedValue([mockTicket]),
          },
        },
      ],
    }).compile();

    service = module.get<TicketService>(TicketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
