import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EntregaService } from './entrega.service';
import { CreateEntregaDto } from './dto/create-entrega.dto';
import { UpdateEntregaDto } from './dto/update-entrega.dto';
import { Entrega } from './entities/entrega.entity';

@Controller('entrega')
export class EntregaController {
  constructor(private readonly entregaService: EntregaService) {}

  @Get()
  findAll(): Promise<Entrega[]> {
    return this.entregaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Entrega> {
    return this.entregaService.findOne(id);
  }

  @Post()
  create(@Body() createEntregaDto: CreateEntregaDto): Promise<Entrega> {
    return this.entregaService.create(createEntregaDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateEntregaDto: UpdateEntregaDto): Promise<Entrega> {
    return this.entregaService.update(id, updateEntregaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.entregaService.remove(id);
  }
}
