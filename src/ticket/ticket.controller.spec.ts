import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { Ticket } from './entities/ticket.entity';

const mockTicket = new Ticket();
mockTicket.id = 1;
mockTicket.number = '123';
mockTicket.price = 'straight';
mockTicket.unit = 400;
mockTicket.createdAt = new Date();
mockTicket.updatedAt = new Date();

describe('TicketController', () => {
  let controller: TicketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketController],
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

    controller = module.get<TicketController>(TicketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
