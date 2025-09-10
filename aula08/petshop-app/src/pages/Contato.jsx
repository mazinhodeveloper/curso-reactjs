import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import CategoryCarousel from '../components/categoryCarousel/CategoryCarousel'
import FeaturedProducts from '../components/featuredProducts/FeaturedProducts'
import AnimalCarousel from '../components/animalCarousel/AnimalCarousel'
import Footer from '../components/footer/Footer'
import ProductGrid from '../components/productGrid/ProductGrid'

const Contato = () => {
    return(
        <>
            <Navbar />
            <Hero />
            {
            /*
            <AnimalCarousel />
            <ProductGrid />
            */
            }
            <Footer />
        </>
    );
}

export default Contato;
