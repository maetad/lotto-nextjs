import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Draw } from './entities/draw.entity';
import { CreateDrawDto } from './dto/create-draw.dto';
import { UpdateDrawDto } from './dto/update-draw.dto';

@Injectable()
export class DrawService {
  constructor(
    @InjectRepository(Draw)
    private drawRepository: Repository<Draw>,
  ) {}

  async create(createDrawDto: CreateDrawDto): Promise<Draw> {
    const result: InsertResult = await this.drawRepository.insert(
      createDrawDto,
    );
    const [identifier] = result.identifiers;
    return this.findOne(identifier.id);
  }

  paginate(options: IPaginationOptions): Promise<Pagination<Draw>> {
    return paginate<Draw>(this.drawRepository, options);
  }

  findAll(): Promise<Draw[]> {
    return this.drawRepository.find();
  }

  findOne(id: number): Promise<Draw> {
    return this.drawRepository.findOne(id);
  }

  update(id: number, updateDrawDto: UpdateDrawDto) {
    return `This action updates a #${id} draw`;
  }

  async remove(id: number): Promise<void> {
    await this.drawRepository.delete(id);
  }
}
