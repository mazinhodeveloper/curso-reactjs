import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Carousel from './components/carousel/Carousel'
import CategoryCard from './components/categoryCard/CategoryCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CategoryCard 
        title={"Brinquedos"} 
        productCount={"84 itens"} 
        image={"https://images.unsplash.com/photo-1634816959430-91725cb42b03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"} 
      />
    </>
  )
}

export default App
