import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Ticket } from './entities/ticket.entity';
import { PaginateTicketDto } from './dto/paginate-ticket.dto';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
  ) {}

  create(createTicketDto: CreateTicketDto) {
    return 'This action adds a new ticket';
  }

  paginate(options: PaginateTicketDto): Promise<Pagination<Ticket>> {
    console.log({ options });
    return paginate<Ticket>(
      this.ticketRepository,
      {
        page: options.page,
        limit: options.limit,
      },
      {
        where: {
          agent: {
            id: options.agentId,
          },
        },
      },
    );
  }

  findAll() {
    return `This action returns all ticket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
