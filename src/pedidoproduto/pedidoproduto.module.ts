import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoProduto } from './entities/pedidoproduto.entity';
import { PedidoProdutoService } from 'src/pedidoproduto/pedidoproduto.service';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoProduto])],
  providers: [PedidoProdutoService],
  exports: [PedidoProdutoService],
})
export class PedidoProdutoModule {}
