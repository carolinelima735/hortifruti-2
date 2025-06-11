import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Produto } from 'src/produto/entities/produto.entity';

@Entity()
export class PedidoProduto {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido, pedido => pedido.pedidoProdutos)
  @JoinColumn({ name: 'pedido_id' })
  pedido: Pedido;

  @ManyToOne(() => Produto, produto => produto.pedidoProdutos)
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;

  @Column()
  quantidade: number;
}
