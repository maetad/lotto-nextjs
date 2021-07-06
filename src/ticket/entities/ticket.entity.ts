import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Agent } from '../../agent/entities/agent.entity';
import { Draw } from '../../draw/entities/draw.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Agent, (agent) => agent.tickets)
  agent: Agent;

  @ManyToOne(() => Draw, (draw) => draw.tickets)
  draw: Draw;

  @Column()
  number: string;

  @Column()
  price: string;

  @Column()
  unit: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
