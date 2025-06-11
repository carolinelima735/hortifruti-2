import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ClienteModule } from './cliente/cliente.module';
import { PedidoModule } from './pedido/pedido.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { EnderecoModule } from './endereco/endereco.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { EntregaModule } from './entrega/entrega.module';
import { EntregadorModule } from './entregador/entregador.module';
import { EstoqueModule } from './estoque/estoque.module';
import { PedidoProdutoModule } from './pedidoproduto/pedidoproduto.module';
import { RelatorioModule } from './relatorio/relatorio.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'hortifruti.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    ProdutoModule,
    CategoriaModule,
    ClienteModule,
    PedidoModule,
    PagamentoModule,
    EnderecoModule,
    FuncionarioModule,
    FornecedorModule,
    EntregaModule,
    EntregadorModule,
    EstoqueModule,
    PedidoProdutoModule,
    RelatorioModule,
  ],
})
export class AppModule {}
