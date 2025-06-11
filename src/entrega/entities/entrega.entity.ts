// src/entrega/entities/entrega.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { StatusEntrega } from 'src/entrega/entities/status-entrega.enum';

@Entity('entregas')
export class Entrega {
  @PrimaryGeneratedColumn()
  id: number;

  // Relação com o pedido (muitos para um)
  @ManyToOne(() => Pedido, (pedido) => pedido.entregas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pedido_id' })
  pedido: Pedido;

  @Column()
  enderecoEntrega: string;

  @Column({ type: 'datetime' })
  dataEntrega: Date;
  

  @Column({ type: 'varchar', length: 20 })
  status: string;
  
}
