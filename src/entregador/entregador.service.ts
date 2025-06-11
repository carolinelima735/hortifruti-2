import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entregador } from './entities/entregador.entity';

@Injectable()
export class EntregadorService {
  constructor(
    @InjectRepository(Entregador)
    private entregadorRepository: Repository<Entregador>,
  ) {}

  async findAll(): Promise<Entregador[]> {
    return this.entregadorRepository.find();
  }

  async findOne(id: number): Promise<Entregador> {
    const entregador = await this.entregadorRepository.findOneBy({ id });
    if (!entregador) {
      throw new Error('Entregador não encontrado');
    }
    return entregador;
  }

  async create(entregador: Entregador): Promise<Entregador> {
    return this.entregadorRepository.save(entregador);
  }

  async update(id: number, entregador: Entregador): Promise<Entregador> {
    await this.entregadorRepository.update(id, entregador);
    const entregadorAtualizado = await this.entregadorRepository.findOneBy({ id });
    if (!entregadorAtualizado) {
      throw new Error('Entregador não encontrado');
    }
    return entregadorAtualizado;
  }

  async remove(id: number): Promise<void> {
    await this.entregadorRepository.delete(id);
  }
}
