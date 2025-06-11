import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Fornecedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  telefone: string;

  @Column()
  endereco: string;
}
