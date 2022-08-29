import PropTypes from 'prop-types';
import styles from './FiltroSecao.module.css'

export const FiltroSecao = ({ secoesFiltro, onSelecionarSecao, secaoSelecionada }) => {
    return (
        <section className={styles.filtro}>
            {secoesFiltro.map((secao, idx) => {
                return (
                    <button key={secao}
                        className={`${styles.botaoFiltro} ${secaoSelecionada === secao ? styles.botaoFiltroSelecionado : ''}`}
                        onClick={() => onSelecionarSecao(secao)}>
                        {secao}
                    </button>
                )
            })}
        </section>
    )
};

FiltroSecao.propTypes = {
    secoesFiltro: PropTypes.arrayOf(PropTypes.string),
    onSelecionarSecao: PropTypes.func,
    secaoSelecionada: PropTypes.bool

};