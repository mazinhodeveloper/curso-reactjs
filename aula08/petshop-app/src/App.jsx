import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import SobreNos from './pages/SobreNos'
import Contato from './pages/Contato'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comprar' element={<Shop />} />
        <Route path='/sobre-nos' element={<SobreNos />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </>
  )
}

export default App
