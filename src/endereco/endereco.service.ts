import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Endereco } from './entities/endereco.entity';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
  ) {}

  async findAll(): Promise<Endereco[]> {
    return this.enderecoRepository.find();
  }

  async findOne(id: number): Promise<Endereco> {
    const endereco = await this.enderecoRepository.findOneBy({ id });
    if (!endereco) {
      throw new Error('Endereço não encontrado');
    }
    return endereco;
  }

  async create(endereco: Endereco): Promise<Endereco> {
    return this.enderecoRepository.save(endereco);
  }

  async update(id: number, endereco: Endereco): Promise<Endereco> {
    await this.enderecoRepository.update(id, endereco);
    const enderecoAtualizado = await this.enderecoRepository.findOneBy({ id });
    if (!enderecoAtualizado) {
      throw new Error('Endereço não encontrado');
    }
    return enderecoAtualizado;
  }

  async remove(id: number): Promise<void> {
    await this.enderecoRepository.delete(id);
  }
}
