import { Footer, Header, Secao } from '@components';
import produtos from '@services/produtos.json';
import styles from './App.module.css';

function App() {

  const secoes = Array.from(new Set(produtos.map((prod) => prod.secao)));

  const obterProdutosSecao = (secao) => {
    return produtos.filter((p) => p.secao === secao);
  };

  const obterSubSecoes = (secao) => {
    const produtosComSubSecoes = obterProdutosSecao(secao).filter((p) => p.subSecao);

    return Array.from(new Set(produtosComSubSecoes.map((p) => p.subSecao)));
  };

  console.log(obterSubSecoes("Entradas"))

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        {secoes.map((s) => {
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
