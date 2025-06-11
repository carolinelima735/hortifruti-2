import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecoService } from 'src/endereco/endereco.service';
import { EnderecoController } from 'src/endereco/endereco.controller';
import { Endereco } from './entities/endereco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Endereco])],
  providers: [EnderecoService],
  controllers: [EnderecoController],
})
export class EnderecoModule {}
