import { ProdutosSelecionadosContext } from ".";

import { useContext } from "react";

export const useProdutosSelecionados = () => {
  const context = useContext(ProdutosSelecionadosContext);

  return context;
};
