import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pagamento } from './entities/pagamento.entity';
import { PagamentoService } from './pagamento.service';
import { PagamentoController } from './pagamento.controller';
import { Pedido } from 'src/pedido/entities/pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pagamento, Pedido])],
  providers: [PagamentoService],
  controllers: [PagamentoController],
})
export class PagamentoModule {}
