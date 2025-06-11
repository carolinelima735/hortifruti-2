import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pagamento } from './entities/pagamento.entity';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';

@Injectable()
export class PagamentoService {
  constructor(
    @InjectRepository(Pagamento)
    private pagamentoRepository: Repository<Pagamento>,
  ) {}

  async findAll(): Promise<Pagamento[]> {
    return this.pagamentoRepository.find({ relations: ['pedido'] });
  }

  async findOne(id: number): Promise<Pagamento> {
    const pagamento = await this.pagamentoRepository.findOne({
      where: { id },
      relations: ['pedido'],
    });
    if (!pagamento) {
      throw new Error('Pagamento não encontrado');
    }
    return pagamento;
  }

  async create(createPagamentoDto: CreatePagamentoDto): Promise<Pagamento> {
    const pagamento = this.pagamentoRepository.create(createPagamentoDto);
    return this.pagamentoRepository.save(pagamento);
  }

  async update(id: number, updatePagamentoDto: UpdatePagamentoDto): Promise<Pagamento> {
    await this.pagamentoRepository.update(id, updatePagamentoDto);
    const pagamentoAtualizado = await this.pagamentoRepository.findOneBy({ id });
    if (!pagamentoAtualizado) {
      throw new Error('Pagamento não encontrado');
    }
    return pagamentoAtualizado;
  }

  async remove(id: number): Promise<void> {
    await this.pagamentoRepository.delete(id);
  }
}
