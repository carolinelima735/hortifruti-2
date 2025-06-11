import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntregaService } from './entrega.service';
import { EntregaController } from './entrega.controller';
import { Entrega } from './entities/entrega.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';  // importar Pedido

@Module({
  imports: [
    TypeOrmModule.forFeature([Entrega, Pedido])  // importar ambos os repositórios
  ],
  controllers: [EntregaController],
  providers: [EntregaService],
})
export class EntregaModule {}
