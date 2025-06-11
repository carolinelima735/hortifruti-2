import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionarioService } from 'src/funcionario/funcionario.service';
import { FuncionarioController } from 'src/funcionario/funcionario.controller';
import { Funcionario } from './entities/funcionario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionario])],
  providers: [FuncionarioService],
  controllers: [FuncionarioController],
})
export class FuncionarioModule {}
