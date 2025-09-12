import ShopSidebar from '../shopSidebar/ShopSidebar';
import ProductCard from '../productCard/ProductCard';
import './ProductGrid.css';
import { useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';
import axios from 'axios'; 

const listaDeCategorias = [
  { nome: "Brinquedos", qtd: 32 }, // índice 0
  { nome: "Roupas", qtd: 30 }, // índice 1
  { nome: "Comidas", qtd: 100 },
];
 
const listaDeMarcas = [
  { nome: "Royal Canin", qtd: 30 },
  { nome: "K9 Spirit", qtd: 20 },
  { nome: "Premier", qtd: 10 },
];

const ProductGrid = () => {
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [loading, setLoading] = useState(false);
    const [pets, setPets] = useState([]); 
    const maximoDeAnimais = 50;
    const produtosPorPagina = 6;

    const API_KEY = "Key_Token";
    const API_SECRET = "Key_Secret"; 

    const obterToken = async () => {
        const response = await axios.post(
            "https://api.petfinder.com/v2/oauth2/token",
            `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`,
            {
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            }
        );
        return response.data.access_token; 
    }

    const buscarPets = async (token, pagina, limite) => {
        const response = await axios.get(
            `/pf-api/animals?page=${pagina}&limit=${limite}&type=Dog`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );
        return response.data; 
    }

    useEffect(() => {
        const fetchTokenEPets = async () => {
            if (loading) return;
            setLoading(true);

            try {
                const meuToken = await obterToken();
                const data = await buscarPets(meuToken, paginaAtual, produtosPorPagina);

                const petsComImagem = data.animals.filter(
                    (pet) => pet.primary_photo_cropped || (pet.photos && pet.photos.length > 0)
                );

                const petsFormatados = petsComImagem.map((cachorro) => ({
                    id: cachorro.id,
                    name: cachorro.name,
                    price: cachorro.breeds.primary,
                    image: cachorro.primary_photo_cropped?.medium || (cachorro.photos && photos[0]?.medium)
                }));

                setPets(petsFormatados);

                const totalConsiderado = Math.min(
                    maximoDeAnimais,
                    data.pagination.total_count
                );
            }
            catch {

            }
        }
    });

    // ceil serve para arrendodar pra cima
    const totalDePaginas = Math.ceil(todosProdutos.length / produtosPorPagina);
    const indiceUltimoProduto = paginaAtual * produtosPorPagina;
    const indicePrimeiroProduto = indiceUltimoProduto - produtosPorPagina;
    const produtosAtuais = todosProdutos.slice(indicePrimeiroProduto, indiceUltimoProduto);

    const mudarPaginaAtual = (numeroDaPagina) => {
        setPaginaAtual(numeroDaPagina)
    }

    return(
        <div className='product-grid-container'>
            <ShopSidebar listaDeCategorias={listaDeCategorias} listaDeMarcas={listaDeMarcas}/>
            <main className='product-list-section'>
                <header className='product-list-header'>
                    <p>Mostrando {indicePrimeiroProduto + 1} até {Math.min(indicePrimeiroProduto, todosProdutos.length)} de {todosProdutos.length} resultados</p>

                    <div className='sort-by'>
                        <label htmlFor="sort">Ordenar por: </label>
                        <select name="sort" id="sort">
                            <option value="default">Mais recente</option>
                            <option value="price-asc">Preço: menor ao maior</option>
                            <option value="price-desc">Preço: maior ao menor</option>
                            <option value="name-asc">Name: A-Z</option>
                        </select>
                    </div>
                </header>

                <div className='products-grid'>
                    {produtosAtuais.map(produto => (
                        <ProductCard key={produto.id} product={produto}/>
                    ))}
                </div>

                <Pagination 
                totalDePaginas={totalDePaginas} 
                paginaAtual={paginaAtual} 
                mudarPaginaAtual={mudarPaginaAtual}/>
            </main>
        </div>
    );
}

export default ProductGrid;
