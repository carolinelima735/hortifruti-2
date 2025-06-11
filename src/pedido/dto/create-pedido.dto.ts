import { IsDateString, IsNotEmpty, IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class CreatePedidoProdutoDto {
  @IsNumber()
  produtoId: number;

  @IsNumber()
  quantidade: number;
}

export class CreatePedidoDto {
  @IsDateString()
  dataPedido: Date;

  @IsString()
  status: string;

  @IsNumber()
  clienteId: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePedidoProdutoDto)
  pedidoProdutos: CreatePedidoProdutoDto[];
}
