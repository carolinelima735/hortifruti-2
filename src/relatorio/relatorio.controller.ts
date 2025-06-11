import { Controller, Get } from '@nestjs/common';
import { RelatorioService } from './relatorio.service';

@Controller('relatorio')
export class RelatorioController {
  constructor(private readonly relatorioService: RelatorioService) {}

  @Get('vendas-por-categoria')
  async vendasPorCategoria() {
    return this.relatorioService.vendasPorCategoria();
  }
}
