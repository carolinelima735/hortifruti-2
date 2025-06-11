import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcionario } from './entities/funcionario.entity';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>,
  ) {}

  async findAll(): Promise<Funcionario[]> {
    return this.funcionarioRepository.find();
  }

  async findOne(id: number): Promise<Funcionario> {
    const funcionario = await this.funcionarioRepository.findOneBy({ id });
    if (!funcionario) {
      throw new Error('Funcionário não encontrado');
    }
    return funcionario;
  }

  async create(funcionario: Funcionario): Promise<Funcionario> {
    return this.funcionarioRepository.save(funcionario);
  }

  async update(id: number, funcionario: Funcionario): Promise<Funcionario> {
    await this.funcionarioRepository.update(id, funcionario);
    const funcionarioAtualizado = await this.funcionarioRepository.findOneBy({ id });
    if (!funcionarioAtualizado) {
      throw new Error('Funcionário não encontrado');
    }
    return funcionarioAtualizado;
  }

  async remove(id: number): Promise<void> {
    await this.funcionarioRepository.delete(id);
  }
}
