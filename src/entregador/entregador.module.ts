import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntregadorService } from 'src/entregador/entregador.service';
import { EntregadorController } from 'src/entregador/entregador.controller';
import { Entregador } from './entities/entregador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entregador])],
  providers: [EntregadorService],
  controllers: [EntregadorController],
})
export class EntregadorModule {}
