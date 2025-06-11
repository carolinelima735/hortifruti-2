import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity'; 

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  cpf: string;

  @OneToMany(() => Endereco, endereco => endereco.cliente)
  enderecos: Endereco[];

  @OneToMany(() => Pedido, pedido => pedido.cliente)
  pedidos: Pedido[];
}
