import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { DrawService } from './draw.service';
import { CreateDrawDto } from './dto/create-draw.dto';
import { UpdateDrawDto } from './dto/update-draw.dto';

@Controller('draw')
export class DrawController {
  constructor(private readonly drawService: DrawService) {}

  @Post()
  create(@Body() createDrawDto: CreateDrawDto) {
    return this.drawService.create(createDrawDto);
  }

  @Get()
  index(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.drawService.paginate({
      page,
      limit,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drawService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDrawDto: UpdateDrawDto) {
    return this.drawService.update(+id, updateDrawDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drawService.remove(+id);
  }
}
