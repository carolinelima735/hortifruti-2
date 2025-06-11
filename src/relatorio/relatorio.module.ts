import { Module } from '@nestjs/common';
import { RelatorioService } from './relatorio.service';
import { RelatorioController } from './relatorio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoProduto } from 'src/pedidoproduto/entities/pedidoproduto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoProduto])],
  controllers: [RelatorioController],
  providers: [RelatorioService],
})
export class RelatorioModule {}
