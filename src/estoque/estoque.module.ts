import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estoque } from './entities/estoque.entity';
import { Produto } from 'src/produto/entities/produto.entity';
import { EstoqueService } from './estoque.service';
import { EstoqueController } from './estoque.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Estoque, Produto])],
  controllers: [EstoqueController],
  providers: [EstoqueService],
})
export class EstoqueModule {}
