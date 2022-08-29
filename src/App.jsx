import { Footer, Header, Secao } from '@components';
import produtos from '@services/produtos.json';
import { FiltroSecao } from './components/FiltroSecao';

import styles from './App.module.css';
import { useState } from 'react';

function App() {

  const [filtro, setFiltro] = useState(null);

  const secoes = Array.from(new Set(produtos.map((prod) => prod.secao)));

  const obterProdutosSecao = (secao) => {
    return produtos.filter((p) => p.secao === secao);
  };

  const obterSubSecoes = (secao) => {
    const produtosComSubSecoes = obterProdutosSecao(secao).filter((p) => p.subSecao);

    return Array.from(new Set(produtosComSubSecoes.map((p) => p.subSecao)));
  };

  console.log(obterSubSecoes("Entradas"));

  const obterSecoesFiltradas = () => {
    if (filtro) {
      return secoes.filter((secao) => secao === filtro);
    }
    return secoes;
  }

  const handleSelecionarSecao = (tituloSecao) => {
    if (tituloSecao === filtro) {
      setFiltro(null);
      return
    }
    setFiltro(tituloSecao);
  }

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <FiltroSecao secoesFiltro={secoes} secaoSelecionada={filtro} onSelecionarSecao={handleSelecionarSecao} />
        {obterSecoesFiltradas().map((s) => {
          return (
            <Secao
              key={s}
              nome={s}
              produtos={obterProdutosSecao(s)}
              subSecoes={obterSubSecoes(s)}
            />)
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;
