import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './entities/cliente.entity';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  findAll(): Promise<Cliente[]> {
    return this.clienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Cliente> {
    return this.clienteService.findOne(id);
  }

  @Post()
  create(@Body() cliente: Cliente): Promise<Cliente> {
    return this.clienteService.create(cliente);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() cliente: Cliente): Promise<Cliente> {
    return this.clienteService.update(id, cliente);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.clienteService.remove(id);
  }
}
