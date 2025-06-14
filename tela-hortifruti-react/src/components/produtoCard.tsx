import React from 'react';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagemUrl: string;
  descricao: string;
}

export const ProdutoCard: React.FC<{ produto: Produto }> = ({ produto }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, width: 180 }}>
      <img
        src={produto.imagemUrl}
        alt={produto.nome}
        style={{ width: '100%', height: 100, objectFit: 'contain' }}
      />
      <h3>{produto.nome}</h3>
      <p>{produto.descricao}</p>
      <p><strong>R$ {produto.preco.toFixed(2)}</strong></p>
    </div>
  );
};

export {};
