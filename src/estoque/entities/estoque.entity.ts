import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Produto } from 'src/produto/entities/produto.entity';

@Entity()
export class Estoque {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Produto)
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;

  @Column()
  quantidade: number;
}
