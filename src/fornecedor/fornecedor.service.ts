import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fornecedor } from './entities/fornecedor.entity';

@Injectable()
export class FornecedorService {
  constructor(
    @InjectRepository(Fornecedor)
    private fornecedorRepository: Repository<Fornecedor>,
  ) {}

  async findAll(): Promise<Fornecedor[]> {
    return this.fornecedorRepository.find();
  }

  async findOne(id: number): Promise<Fornecedor> {
    const fornecedor = await this.fornecedorRepository.findOneBy({ id });
    if (!fornecedor) {
      throw new Error('Fornecedor não encontrado');
    }
    return fornecedor;
  }

  async create(fornecedor: Fornecedor): Promise<Fornecedor> {
    return this.fornecedorRepository.save(fornecedor);
  }

  async update(id: number, fornecedor: Fornecedor): Promise<Fornecedor> {
    await this.fornecedorRepository.update(id, fornecedor);
    const fornecedorAtualizado = await this.fornecedorRepository.findOneBy({ id });
    if (!fornecedorAtualizado) {
      throw new Error('Fornecedor não encontrado');
    }
    return fornecedorAtualizado;
  }

  async remove(id: number): Promise<void> {
    await this.fornecedorRepository.delete(id);
  }
}
