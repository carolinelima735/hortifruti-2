export class Entregador {
    id: number;
    nome: string;
    telefone: string;
    email: string;
    placaVeiculo: string;
  
    constructor(
      id: number,
      nome: string,
      telefone: string,
      email: string,
      placaVeiculo: string
    ) {
      this.id = id;
      this.nome = nome;
      this.telefone = telefone;
      this.email = email;
      this.placaVeiculo = placaVeiculo;
    }
  }
  