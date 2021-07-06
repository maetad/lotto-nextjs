import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Agent } from './entities/agent.entity';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

@Injectable()
export class AgentService {
  constructor(
    @InjectRepository(Agent)
    private agentRepository: Repository<Agent>,
  ) {}

  async create(createAgentDto: CreateAgentDto): Promise<Agent> {
    const result: InsertResult = await this.agentRepository.insert(
      createAgentDto,
    );
    const [identifier] = result.identifiers;
    return this.findOne(identifier.id);
  }

  paginate(options: IPaginationOptions): Promise<Pagination<Agent>> {
    return paginate<Agent>(this.agentRepository, options);
  }

  findAll() {
    return `This action returns all agent`;
  }

  findOne(id: number): Promise<Agent> {
    return this.agentRepository.findOne(id);
  }

  update(id: number, updateAgentDto: UpdateAgentDto) {
    return `This action updates a #${id} agent`;
  }

  remove(id: number) {
    return `This action removes a #${id} agent`;
  }
}
