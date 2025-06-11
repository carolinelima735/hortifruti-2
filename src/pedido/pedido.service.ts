import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { PedidoProduto } from 'src/pedidoproduto/entities/pedidoproduto.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,

    @InjectRepository(PedidoProduto)
    private readonly pedidoProdutoRepository: Repository<PedidoProduto>,
  ) {}

  async findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find({
      relations: ['pedidoProdutos', 'pedidoProdutos.produto'],
    });
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOne({
      where: { id },
      relations: ['pedidoProdutos', 'pedidoProdutos.produto'],
    });

    if (!pedido) {
      throw new NotFoundException(`Pedido com id ${id} não encontrado`);
    }

    return pedido;
  }

  async create(pedidoData: CreatePedidoDto): Promise<Pedido> {
    const { pedidoProdutos, ...pedidoInfo } = pedidoData;
  
    const pedido = this.pedidoRepository.create(pedidoInfo);
    await this.pedidoRepository.save(pedido);
  
    if (!pedidoProdutos || !Array.isArray(pedidoProdutos)) {
      throw new Error('pedidoProdutos deve ser um array e não pode ser vazio');
    }
  
    const pedidoProdutosEntities = pedidoProdutos.map(pp =>
      this.pedidoProdutoRepository.create({
        pedido,
        produto: { id: pp.produtoId },
        quantidade: pp.quantidade,
      }),
    );
  
    await this.pedidoProdutoRepository.save(pedidoProdutosEntities);
  
    return this.findOne(pedido.id);
  }
  
  async update(id: number, updateData: UpdatePedidoDto): Promise<Pedido> {
    const pedido = await this.findOne(id);

    if (updateData.pedidoProdutos) {
      // Remove os produtos antigos
      await this.pedidoProdutoRepository.delete({ pedido: { id } });

      // Cria os novos relacionamentos
      const novosProdutos = updateData.pedidoProdutos.map(pp =>
        this.pedidoProdutoRepository.create({
          pedido,
          produto: { id: pp.produtoId },
          quantidade: pp.quantidade,
        }),
      );

      await this.pedidoProdutoRepository.save(novosProdutos);
    }

    // Atualiza as outras propriedades do pedido
    Object.assign(pedido, updateData);
    await this.pedidoRepository.save(pedido);

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const pedido = await this.findOne(id);

    // Remove os relacionamentos primeiro
    await this.pedidoProdutoRepository.delete({ pedido: { id } });

    await this.pedidoRepository.remove(pedido);
  }
}
