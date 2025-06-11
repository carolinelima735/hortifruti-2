import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity'; // ajuste o caminho se necessário

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rua: string;

  @Column()
  numero: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @ManyToOne(() => Cliente, cliente => cliente.enderecos)
  cliente: Cliente;
}
