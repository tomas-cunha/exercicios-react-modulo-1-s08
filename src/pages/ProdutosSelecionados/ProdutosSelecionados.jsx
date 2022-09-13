import { ListaCards } from "@components";
import { useProdutosSelecionados } from "@context";
import styles from "./ProdutosSelecionados.module.css";

export const ProdutosSelecionados = () => {
  const { produtosSelecionados, limparProdutos } = useProdutosSelecionados();

  const total = produtosSelecionados.reduce((soma, item) => {
    return soma + item.valor;
  }, 0);

  return (
    <>
      <div className={styles.container}>
        <h1>Produtos Selecionados</h1>
        <button className={styles.botaoDelete} onClick={() => limparProdutos()}>
          Remover itens
        </button>
      </div>

      <h2>R$ {total.toFixed(2).replace(".", `,`)}</h2>
      <ListaCards produtos={produtosSelecionados} />
    </>
  );
};
