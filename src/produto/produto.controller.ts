import { Controller, Get, Post, Put, Delete, Patch, Body, Param } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './entities/produto.entity';
import { EntradaEstoqueDto } from './dto/entrada-estoque.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Produto> {
    return this.produtoService.findOne(id);
  }

  @Post()
  create(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.create(produto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() produto: Produto): Promise<Produto> {
    return this.produtoService.update(id, produto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.produtoService.remove(id);
  }

  @Patch('entrada-estoque')
  entradaEstoque(@Body() entradaEstoqueDto: EntradaEstoqueDto): Promise<Produto> {
    return this.produtoService.entradaEstoque(entradaEstoqueDto);
  }
}
