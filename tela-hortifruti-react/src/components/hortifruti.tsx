import React from 'react';
import { ProdutoCard, Produto } from './produtoCard';

// Produtos corrigidos com imagens corretas
const produtosExemplo: Produto[] = [
  {
    id: 1,
    nome: 'Maçã',
    preco: 4.5,
    imagemUrl: 'https://cdn-icons-png.flaticon.com/512/415/415733.png',
    descricao: 'Maçã vermelha fresca e crocante.',
  },
  {
    id: 2,
    nome: 'Banana',
    preco: 3.0,
    imagemUrl: 'https://images.vexels.com/media/users/3/143061/isolated/preview/aaf71ed4e387a6838e1c521fbecde77a-fruta-icone-da-banana.png', // imagem correta de banana
    descricao: 'Banana madura, ideal para vitaminas.',
  },
  {
    id: 3,
    nome: 'Alface',
    preco: 2.5,
    imagemUrl: 'https://cdn-icons-png.flaticon.com/512/6531/6531390.png', // imagem correta de alface
    descricao: 'Alface verde, folha crocante.',
  },
];

// Promoções com frutas/legumes reais
const promocoes = [
  {
    id: 101,
    nome: 'Morango',
    preco: 5.99,
    imagemUrl: 'https://images.vexels.com/content/260761/preview/strawberry-flat-simple-fruit-b7616e.png',
    descricao: 'Morango fresco e doce.',
  },
  {
    id: 102,
    nome: 'Tomate',
    preco: 3.49,
    imagemUrl: 'https://images.vexels.com/media/users/3/185310/isolated/lists/06689dffb5be50454cfaf0cfb6f069ed-tomate-vegetal-plano.png',
    descricao: 'Tomate maduro, ideal para saladas.',
  },
  {
    id: 103,
    nome: 'Cenoura',
    preco: 2.99,
    imagemUrl: 'https://png.pngtree.com/png-clipart/20230102/original/pngtree-fresh-carrot-vegetable-sticker-image-png-image_8855347.png',
    descricao: 'Cenoura fresca e crocante.',
  },
];

// Categorias com emojis para simplicidade
const categorias = [
  { nome: 'Laranja', icon: '🍊' },
  { nome: 'Manga', icon: '🥭' },
  { nome: 'Maçã', icon: '🍎' },
];

// Lojas com emojis
const lojas = [
  { nome: 'Mercado', icon: '🏪' },
  { nome: 'Feira', icon: '🏬' },
  { nome: 'Carrinho', icon: '🛒' },
  { nome: 'Quitanda', icon: '🏡' },
];

// Header component
const Header: React.FC = () => (
  <header
    style={{
      background: '#800000',
      padding: '16px 24px',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    }}
  >
    <div style={{ fontWeight: 'bold', fontSize: 28, letterSpacing: 2 }}>HORTIFRUTI</div>
    <nav>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: 24,
          margin: 0,
          padding: 0,
          fontSize: 16,
          fontWeight: '500',
          cursor: 'pointer',
        }}
      >
        <li>Início</li>
        <li>Produtos</li>
        <li>Promoções</li>
        <li>Contato</li>
      </ul>
    </nav>
    <input
      type="text"
      placeholder="Buscar frutas, verduras..."
      style={{
        padding: '8px 12px',
        borderRadius: 20,
        border: 'none',
        width: 220,
        fontSize: 14,
        outline: 'none',
      }}
    />
  </header>
);

// Footer component
const Footer: React.FC = () => (
  <footer
    style={{
      background: '#800000',
      color: '#fff',
      textAlign: 'center',
      padding: '24px 16px',
      fontSize: 14,
      marginTop: 48,
    }}
  >
    <p>© 2025 Hortifruti. Todos os direitos reservados.</p>
    <p>
      <a href="#!" style={{ color: '#f9c0c0', textDecoration: 'none', marginRight: 16 }}>
        Política de Privacidade
      </a>
      <a href="#!" style={{ color: '#f9c0c0', textDecoration: 'none' }}>
        Termos de Uso
      </a>
    </p>
  </footer>
);

export const Hortifruti: React.FC = () => {
  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <Header />

      {/* Categorias */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 32,
          margin: '32px 0 24px 0',
          flexWrap: 'wrap',
        }}
      >
        {categorias.map((cat) => (
          <div
            key={cat.nome}
            style={{
              background: '#fff',
              borderRadius: '50%',
              width: 80,
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 36,
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              border: '2px solid #eee',
              flexDirection: 'column',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <span>{cat.icon}</span>
            <span style={{ fontSize: 12, marginTop: 6, color: '#444' }}>{cat.nome}</span>
          </div>
        ))}
      </section>

      {/* Lojas */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 32,
          marginBottom: 32,
          flexWrap: 'wrap',
        }}
      >
        {lojas.map((loja) => (
          <div
            key={loja.nome}
            style={{
              background: '#fff',
              borderRadius: 16,
              width: 70,
              height: 70,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              border: '2px solid #eee',
              flexDirection: 'column',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <span>{loja.icon}</span>
            <span style={{ fontSize: 10, marginTop: 4, color: '#444' }}>{loja.nome}</span>
          </div>
        ))}
      </section>

      {/* Promoções */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 32,
          marginBottom: 32,
          flexWrap: 'wrap',
        }}
      >
        {promocoes.map((promo) => (
          <div
            key={promo.id}
            style={{
              background: '#fff',
              borderRadius: 16,
              width: 180,
              padding: 16,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
            }}
          >
            <img
              src={promo.imagemUrl}
              alt={promo.nome}
              style={{ width: 80, height: 80, objectFit: 'contain', marginBottom: 12 }}
            />
            <h4 style={{ margin: '0 0 8px 0', color: '#222' }}>{promo.nome}</h4>
            <p
              style={{
                color: '#c62828',
                fontWeight: 'bold',
                fontSize: 18,
                margin: 0,
              }}
            >
              R$ {promo.preco.toFixed(2)}
            </p>
          </div>
        ))}
      </section>

      {/* Cards de Produtos */}
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 32,
          justifyContent: 'center',
          marginBottom: 48,
        }}
      >
        {produtosExemplo.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </section>

      <Footer />
    </div>
  );
};
