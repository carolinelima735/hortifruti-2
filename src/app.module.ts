import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Produto } from 'src/produto/entities/produto.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Pagamento } from 'src/pagamento/entities/pagamento.entity';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Funcionario } from 'src/funcionario/entities/funcionario.entity';
import { Fornecedor } from 'src/fornecedor/entities/fornecedor.entity';
import { Entrega } from 'src/entrega/entities/entrega.entity';
import { Entregador } from 'src/entregador/entities/entregador.entity';
import { Estoque } from 'src/estoque/entities/estoque.entity';
import { PedidoProduto } from 'src/pedidoproduto/entities/pedidoproduto.entity';


import { ProdutoModule } from 'src/produto/produto.module';
import { CategoriaModule } from 'src/categoria/categoria.module';
import { ClienteModule } from 'src/cliente/cliente.module';
import { PedidoModule } from 'src/pedido/pedido.module';
import { PagamentoModule } from 'src/pagamento/pagamento.module';
import { EnderecoModule } from 'src/endereco/endereco.module';
import { FuncionarioModule } from 'src/funcionario/funcionario.module';
import { FornecedorModule } from 'src/fornecedor/fornecedor.module';
import { EntregaModule } from 'src/entrega/entrega.module';
import { EntregadorModule } from 'src/entregador/entregador.module';
import { EstoqueModule } from 'src/estoque/estoque.module';
import { PedidoProdutoModule } from 'src/pedidoproduto/pedidoproduto.module';
import { RelatorioModule } from 'src/relatorio/relatorio.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'hortifruti.db',
      entities: [
        Produto,
        Categoria,
        Cliente,
        Pedido,
        Pagamento,
        Endereco,
        Funcionario,
        Fornecedor,
        Entrega,
        Entregador,
        Estoque,
        PedidoProduto,
      ],
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
