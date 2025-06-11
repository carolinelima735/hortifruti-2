import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoProduto } from './entities/pedidoproduto.entity';

@Injectable()
export class PedidoProdutoService {
  constructor(
    @InjectRepository(PedidoProduto)
    private pedidoProdutoRepository: Repository<PedidoProduto>,
  ) {}

  async create(pedidoProdutoData: Partial<PedidoProduto>): Promise<PedidoProduto> {
    const pedidoProduto = this.pedidoProdutoRepository.create(pedidoProdutoData);
    return this.pedidoProdutoRepository.save(pedidoProduto);
  }

  async findAll(): Promise<PedidoProduto[]> {
    return this.pedidoProdutoRepository.find({ relations: ['pedido', 'produto'] });
  }

  // outros métodos como update, delete, findById, etc, se precisar
}
