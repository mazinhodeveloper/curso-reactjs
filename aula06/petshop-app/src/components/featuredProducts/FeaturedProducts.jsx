import './FeaturedProducts.css';
import ProductCard from '../productCard/ProductCard';

// Dados de exemplo para simular a busca de produtos
const featuredProducts = [
    {
        name: 'Premium Dog Food',
        price: 19.99,
        image: 'https://images.tcdn.com.br/img/img_prod/1326417/racao_jaguar_para_caes_adultos_16_proteinas_5kg_39_1_542df53422abd15c60b4ec3bcee421f0.png'
    },
    {
        name: 'Pedigree Nutrição Essential',
        price: 17.85,
        image: 'https://cdn.awsli.com.br/600x1000/203/203612/produto/216800158/7896029087336-product-image-1-6c01eu50j5.png'
    },
    {
        name: 'Premium Dog Food',
        price: 19.99,
        image: 'https://images.tcdn.com.br/img/img_prod/1326417/racao_jaguar_para_caes_adultos_16_proteinas_5kg_39_1_542df53422abd15c60b4ec3bcee421f0.png'
    }
];

const FeaturedProducts = () => {
    return (
        <section className="featured-products-section">
            <h2 className="section-title">Produtos mais vendidos</h2>
            <div className="product-cards-container">
                {featuredProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;