import { ListaCards } from "@components";
import { useProdutosSelecionados } from "@context";

export const ProdutosSelecionados = () => {
  const { produtosSelecionados } = useProdutosSelecionados();
  console.log(produtosSelecionados);

  const total = produtosSelecionados.reduce((soma, item) => {
    return soma + item.valor;
  }, 0);

  return (
    <>
      <h1>Produtos Selecionados</h1>
      <h2>R$ {total.toFixed(2).replace(".", `,`)}</h2>
      <ListaCards produtos={produtosSelecionados} />
    </>
  );
};
