1- Fluxo Cadastro de pedido (GET) - pedido
 http://localhost:3001/pedido

{
  "clienteId": 1,
  "produtos": [
    { "produtoId": 1, "quantidade": 2 },
    { "produtoId": 2, "quantidade": 1 }
  ],
  "pedidoProdutos":[
      {
          "quantidade": 2,
          "produtoId": 1, "pedidoId": 1

      }
  ]
}


2- Fluxo Finalização de pagamento (POST) - pagamento
 http://localhost:3001/pagamento

{
  "pedidoId": 1,
  "valor": 150.00,
  "formaPagamento": "cartao",
  "dataPagamento": "2025-05-21"
}

3- Geração de entrega (POST) - entrega
 http://localhost:3001/entrega

{
  "pedidoId": 1,
  "entregadorId": 1,
  "enderecoId": 1,
  "status": "em rota",
  "dataEntrega": "2025-05-22"
}



4- Entrada de produtos no estoque (POST) estoque/entrada
 http://localhost:3001/estoque/entrada

{
  "produtoId": 1,
  "quantidade": 10
}

 
5- relatório de vendas por categoria (GET)

 http://localhost:3001/relatorio/vendas-por-categoria


 Nome dos integrantes

Ana Luiza Rodrigues Machado - UC23100057
Breno Andrade - UC23101356
Bruno Chagas Temote - UC22200526
Caroline Holanda Nogueira Lima - UC23102265
Davi Maia de Figueiredo - UC23101005
Lucas Alves Vilela - UC25102689
