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

{
  "pedidoId": 1,
  "valor": 150.00,
  "formaPagamento": "cartao",
  "dataPagamento": "2025-05-21"
}

3- Geração de entrega (POST) - entrega

{
  "pedidoId": 1,
  "entregadorId": 1,
  "enderecoId": 1,
  "status": "em rota",
  "dataEntrega": "2025-05-22"
}



4- Entrada de produtos no estoque (POST) estoque/entrada

{
  "produtoId": 1,
  "quantidade": 10
}

 
5- relatório de vendas por categoria (GET)

 http://localhost:3001/relatorio/vendas-por-categoria