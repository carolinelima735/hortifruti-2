import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { Fornecedor } from './entities/fornecedor.entity';

@Controller('fornecedor')
export class FornecedorController {
  constructor(private readonly fornecedorService: FornecedorService) {}

  @Get()
  findAll(): Promise<Fornecedor[]> {
    return this.fornecedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Fornecedor> {
    return this.fornecedorService.findOne(id);
  }

  @Post()
  create(@Body() fornecedor: Fornecedor): Promise<Fornecedor> {
    return this.fornecedorService.create(fornecedor);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() fornecedor: Fornecedor): Promise<Fornecedor> {
    return this.fornecedorService.update(id, fornecedor);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.fornecedorService.remove(id);
  }
}
