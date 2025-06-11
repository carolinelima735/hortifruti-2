import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FornecedorService } from 'src/fornecedor/fornecedor.service';
import { FornecedorController } from 'src/fornecedor/fornecedor.controller';
import { Fornecedor } from './entities/fornecedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fornecedor])],
  providers: [FornecedorService],
  controllers: [FornecedorController],
})
export class FornecedorModule {}
