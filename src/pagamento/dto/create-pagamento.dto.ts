export class CreatePagamentoDto {
    pedidoId: number;   // qual pedido vai pagar
    formaPagamento: string;  // tipo de pagamento, ex: cartão, pix, boleto
    valor: number;  // valor pago
    dataPagamento: Date;  // data da quitação do pagamento
  }
  