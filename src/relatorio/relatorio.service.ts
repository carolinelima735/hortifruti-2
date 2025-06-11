import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoProduto } from 'src/pedidoproduto/entities/pedidoproduto.entity';

@Injectable()
export class RelatorioService {
  constructor(
    @InjectRepository(PedidoProduto)
    private pedidoProdutoRepository: Repository<PedidoProduto>,
  ) {}

  async vendasPorCategoria() {
    return await this.pedidoProdutoRepository
      .createQueryBuilder('pp')
      .innerJoin('pp.produto', 'produto')
      .innerJoin('produto.categoria', 'categoria')
      .select('categoria.nome', 'categoria')
      .addSelect('SUM(pp.quantidade)', 'total_vendido')
      .groupBy('categoria.nome')
      .getRawMany();
  }
}
