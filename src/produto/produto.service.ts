import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { EntradaEstoqueDto } from './dto/entrada-estoque.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async findOne(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOneBy({ id });
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    return produto;
  }

  async create(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }

  async update(id: number, produto: Produto): Promise<Produto> {
    await this.produtoRepository.update(id, produto);
    const produtoAtualizado = await this.produtoRepository.findOneBy({ id });
    if (!produtoAtualizado) {
      throw new NotFoundException('Produto não encontrado');
    }
    return produtoAtualizado;
  }

  async remove(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }

  // Método para entrada de estoque
  async entradaEstoque(entrada: EntradaEstoqueDto): Promise<Produto> {
    const produto = await this.findOne(entrada.produtoId);
    produto.quantidadeEstoque += entrada.quantidade;
    return this.produtoRepository.save(produto);
  }
}
