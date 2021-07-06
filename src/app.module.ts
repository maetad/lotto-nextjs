import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrawModule } from './draw/draw.module';
import { AgentModule } from './agent/agent.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [TypeOrmModule.forRoot(), DrawModule, AgentModule, TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
