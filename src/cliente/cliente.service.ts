import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOneBy({ id });
    if (!cliente) {
      throw new Error('Cliente não encontrado');
    }
    return cliente;
  }

  async create(cliente: Cliente): Promise<Cliente> {
    return this.clienteRepository.save(cliente);
  }

  async update(id: number, cliente: Cliente): Promise<Cliente> {
    await this.clienteRepository.update(id, cliente);
    const clienteAtualizado = await this.clienteRepository.findOneBy({ id });
    if (!clienteAtualizado) {
      throw new Error('Cliente não encontrado');
    }
    return clienteAtualizado;
  }

  async remove(id: number): Promise<void> {
    await this.clienteRepository.delete(id);
  }
}
