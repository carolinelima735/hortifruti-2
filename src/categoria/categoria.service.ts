import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOneBy({ id });
    if (!categoria) {
      throw new Error('Categoria não encontrada');
    }
    return categoria;
  }

  async create(categoria: Categoria): Promise<Categoria> {
    return this.categoriaRepository.save(categoria);
  }

  async update(id: number, categoria: Categoria): Promise<Categoria> {
    await this.categoriaRepository.update(id, categoria);
    const categoriaAtualizada = await this.categoriaRepository.findOneBy({ id });
    if (!categoriaAtualizada) {
      throw new Error('Categoria não encontrada');
    }
    return categoriaAtualizada;
  }

  async remove(id: number): Promise<void> {
    await this.categoriaRepository.delete(id);
  }
}
