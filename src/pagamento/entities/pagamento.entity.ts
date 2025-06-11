import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';

@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  valor: number;

  @Column()
  formaPagamento: string;   // <-- alterado aqui

  @Column()
  dataPagamento: Date;      // <-- também adicione a data do pagamento, que está no DTO

  @OneToOne(() => Pedido)
  @JoinColumn({ name: 'pedido_id' })
  pedido: Pedido;
}
