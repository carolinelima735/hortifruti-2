import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entrega } from './entities/entrega.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { CreateEntregaDto } from './dto/create-entrega.dto';
import { UpdateEntregaDto } from './dto/update-entrega.dto';
import { StatusEntrega } from './entities/status-entrega.enum';

@Injectable()
export class EntregaService {
  constructor(
    @InjectRepository(Entrega)
    private entregaRepository: Repository<Entrega>,
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
  ) {}

  async findAll(): Promise<Entrega[]> {
    return this.entregaRepository.find({ relations: ['pedido'] });
  }

  async findOne(id: number): Promise<Entrega> {
    const entrega = await this.entregaRepository.findOne({
      where: { id },
      relations: ['pedido'],
    });
    if (!entrega) {
      throw new NotFoundException('Entrega não encontrada');
    }
    return entrega;
  }

  async create(createEntregaDto: CreateEntregaDto): Promise<Entrega> {
    const pedido = await this.pedidoRepository.findOneBy({ id: createEntregaDto.pedidoId });
    if (!pedido) throw new NotFoundException('Pedido não encontrado');

    const entrega = this.entregaRepository.create({
      pedido: pedido, // ✅ usa o objeto que já existe
      enderecoEntrega: 'Rua tal, 123',
      dataEntrega: new Date(),
      status: StatusEntrega.PENDENTE
    });
    
    return this.entregaRepository.save(entrega);

  }

  async update(id: number, updateEntregaDto: UpdateEntregaDto): Promise<Entrega> {
    const entrega = await this.findOne(id);
    Object.assign(entrega, updateEntregaDto);
    return this.entregaRepository.save(entrega);
  }

  async remove(id: number): Promise<void> {
    await this.entregaRepository.delete(id);
  }
}
