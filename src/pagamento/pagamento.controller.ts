import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';

@Controller('pagamento')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  @Get()
  findAll() {
    return this.pagamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pagamentoService.findOne(id);
  }

  @Post()
  create(@Body() createPagamentoDto: CreatePagamentoDto) {
    return this.pagamentoService.create(createPagamentoDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePagamentoDto: UpdatePagamentoDto) {
    return this.pagamentoService.update(id, updatePagamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pagamentoService.remove(id);
  }
}
