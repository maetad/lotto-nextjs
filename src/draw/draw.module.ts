import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrawService } from './draw.service';
import { DrawController } from './draw.controller';
import { Draw } from './entities/draw.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Draw])],
  controllers: [DrawController],
  providers: [DrawService],
})
export class DrawModule {}
