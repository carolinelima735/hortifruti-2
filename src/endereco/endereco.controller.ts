import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { Endereco } from './entities/endereco.entity';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Get()
  findAll(): Promise<Endereco[]> {
    return this.enderecoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Endereco> {
    return this.enderecoService.findOne(id);
  }

  @Post()
  create(@Body() endereco: Endereco): Promise<Endereco> {
    return this.enderecoService.create(endereco);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() endereco: Endereco): Promise<Endereco> {
    return this.enderecoService.update(id, endereco);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.enderecoService.remove(id);
  }
}
