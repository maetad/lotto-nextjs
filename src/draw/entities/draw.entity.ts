import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Ticket } from '../../ticket/entities/ticket.entity';

@Entity()
export class Draw {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Ticket, (ticket) => ticket.agent)
  tickets: Ticket[];

  @Column()
  date: Date;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
