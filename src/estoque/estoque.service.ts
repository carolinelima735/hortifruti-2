import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estoque } from './entities/estoque.entity';
import { Produto } from 'src/produto/entities/produto.entity';

@Injectable()
export class EstoqueService {
  constructor(
    @InjectRepository(Estoque)
    private estoqueRepository: Repository<Estoque>,

    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async registrarEntrada(produtoId: number, quantidade: number): Promise<Estoque> {
    let estoque = await this.estoqueRepository.findOne({
      where: { produto: { id: produtoId } },
      relations: ['produto'],
    });

    if (!estoque) {
      const produto = await this.produtoRepository.findOneBy({ id: produtoId });
      if (!produto) {
        throw new Error('Produto não encontrado');
      }

      estoque = this.estoqueRepository.create({
        produto,
        quantidade,
      });
    } else {
      estoque.quantidade += quantidade;
    }

    return this.estoqueRepository.save(estoque);
  }
}
