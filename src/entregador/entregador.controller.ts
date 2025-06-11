import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EntregadorService } from './entregador.service';
import { Entregador } from './entities/entregador.entity';

@Controller('entregador')
export class EntregadorController {
  constructor(private readonly entregadorService: EntregadorService) {}

  @Get()
  findAll(): Promise<Entregador[]> {
    return this.entregadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Entregador> {
    return this.entregadorService.findOne(id);
  }

  @Post()
  create(@Body() entregador: Entregador): Promise<Entregador> {
    return this.entregadorService.create(entregador);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() entregador: Entregador): Promise<Entregador> {
    return this.entregadorService.update(id, entregador);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.entregadorService.remove(id);
  }
}
