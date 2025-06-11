import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { Funcionario } from './entities/funcionario.entity';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Get()
  findAll(): Promise<Funcionario[]> {
    return this.funcionarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Funcionario> {
    return this.funcionarioService.findOne(id);
  }

  @Post()
  create(@Body() funcionario: Funcionario): Promise<Funcionario> {
    return this.funcionarioService.create(funcionario);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() funcionario: Funcionario): Promise<Funcionario> {
    return this.funcionarioService.update(id, funcionario);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.funcionarioService.remove(id);
  }
}
