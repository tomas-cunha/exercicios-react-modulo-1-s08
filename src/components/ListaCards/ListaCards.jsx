import PropTypes from 'prop-types';

import { Card } from '@components';

import styles from './ListaCards.module.css';

import { useState } from 'react';

export const ListaCards = ({ produtos }) => {
  const [idSelecionados, setIdSelecionados] = useState([])

  const isSelecionado = (id) => {
    return idSelecionados.some((item) => item === id);
  };

  const handleSelecionar = (idASelecionar) => {
    if (isSelecionado(idASelecionar)) {
      setIdSelecionados(idSelecionados.filter(id => id !== idASelecionar));
      return
    }
    setIdSelecionados([...idSelecionados, idASelecionar])

  }

  return (
    <ul className={styles.lista}>
      {produtos.map((produto) => (
        <li className={styles.listaItem} key={produto.id}>
          <Card produto={produto} selecionado={isSelecionado(produto.id)} onSelecionar={() => handleSelecionar(produto.id)} />
        </li>
      ))}
    </ul>
  )
};

ListaCards.propTypes = {
  produtos: PropTypes.array.isRequired,
};
