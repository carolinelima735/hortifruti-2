import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { Pedido } from './entities/pedido.entity';
import { PedidoProduto } from 'src/pedidoproduto/entities/pedidoproduto.entity';  // importe aqui

@Module({
  imports: [
    TypeOrmModule.forFeature([Pedido, PedidoProduto])  // adicione os dois repositórios aqui
  ],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}
