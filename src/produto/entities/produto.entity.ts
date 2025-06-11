import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { PedidoProduto } from 'src/pedidoproduto/entities/pedidoproduto.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('decimal')  // preço com casas decimais
  preco: number;

  @Column({ default: 0 })
  quantidadeEstoque: number;  // controla estoque

  @ManyToOne(() => Categoria, categoria => categoria.produtos)
  categoria: Categoria;

  @OneToMany(() => PedidoProduto, pedidoProduto => pedidoProduto.produto)
  pedidoProdutos: PedidoProduto[];
}
