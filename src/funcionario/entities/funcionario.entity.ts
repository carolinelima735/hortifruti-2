import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  telefone: string;

  @Column()
  cargo: string;

  @Column('decimal', { precision: 10, scale: 2 })
  salario: number;

  @Column({ type: 'date' })
  dataAdmissao: Date;
}
