import './Pagination.css';

const Pagination = ({ totalDePaginas, paginaAtual, mudarPaginaAtual }) => {
    return (
        <div className='pagination'>
            {
                Array.from( 
                     { length: totalDePaginas }, (_, i) => i + 1 
                )
                .map(
                    numeroDaPagina => (
                        <button 
                        key={numeroDaPagina} 
                        className={`page-button ${paginaAtual === numeroDaPagina ? 'active' : ''}`} 
                        onClick={() => mudarPaginaAtual(numeroDaPagina)} 
                        disabled={paginaAtual === totalDePaginas}
                        >
                            {numeroDaPagina}
                        </button>
                    )
                )
            } 

            <button 
            className='page-button next' 
            onClick={() => paginaAtual < totalDePaginas && mudarPaginaAtual(paginaAtual + 1)}
            >
                Próximo &gt;
            </button>
        </div>
    );
}

export default Pagination; 
