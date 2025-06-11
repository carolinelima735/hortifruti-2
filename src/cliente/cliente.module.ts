import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteService } from 'src/cliente/cliente.service';
import { ClienteController } from 'src/cliente/cliente.controller';
import { Cliente } from './entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  providers: [ClienteService],
  controllers: [ClienteController],
})
export class ClienteModule {}
