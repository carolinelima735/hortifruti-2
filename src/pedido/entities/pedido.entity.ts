import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Entrega } from 'src/entrega/entities/entrega.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { PedidoProduto } from 'src/pedidoproduto/entities/pedidoproduto.entity';

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  dataPedido: Date;

  // Relação com Cliente (muitos Pedidos para 1 Cliente)
  @ManyToOne(() => Cliente, cliente => cliente.pedidos)
  @JoinColumn({ name: 'cliente_id' }) // nome da coluna no banco
  cliente: Cliente;

  // Relação com Entrega
  @OneToMany(() => Entrega, entrega => entrega.pedido)
  entregas: Entrega[];

  // Relação com PedidoProduto
  @OneToMany(() => PedidoProduto, pedidoProduto => pedidoProduto.pedido)
  pedidoProdutos: PedidoProduto[];
}

