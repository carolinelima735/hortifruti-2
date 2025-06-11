import { Controller, Post, Body } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  @Post('entrada')
  async registrarEntrada(@Body() updateEstoqueDto: UpdateEstoqueDto) {
    const { produtoId, quantidade } = updateEstoqueDto;
    return this.estoqueService.registrarEntrada(produtoId, quantidade);
  }
}
