import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Carousel from './components/carousel/Carousel'
import CategoryCard from './components/categoryCard/CategoryCard';
import CategoryCarousel from './components/categoryCarousel/categoryCarousel';
import AnimalCard from './components/animalCard/animalCard';
import AnimalCarousel from './components/animalCarousel/AnimalCarousel';
import FeaturedProducts from './components/featuredProducts/FeaturedProducts';
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCarousel />
      <FeaturedProducts />
      <AnimalCarousel />
      <Footer />
    </>
  )
}

export default App
