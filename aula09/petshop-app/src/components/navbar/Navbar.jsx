import './Navbar.css'; 
import { Search, Heart, Cart } from 'akar-icons'; 
import Logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='container'>
                <a href='/'>
                    <img src={ Logo } alt='Logo do Petshop' />
                </a>

                <ul className='nav-links'>
                    <Link to='/'>Início</Link>
                    <Link to='/comprar'>Comprar</Link>
                    <Link to='/sobre-nos'>Sobre Nós</Link>
                    <Link to='/contato'>Contato</Link>
                </ul>

                <div className='nav-actions'>
                    <div className='search-bar'>
                        <input type='text' placeholder='Pesquise aqui...' />
                        <button className='search-icon'>
                            <Search className='icon' size={20} />
                        </button>
                    </div>
                     <button className='icon-btn'>
                        <Heart />
                        <span className='badge'>0</span>
                    </button>
                     <button className='icon-btn'>
                        <Cart />
                        <span className='badge'>0</span>
                    </button>
                </div>
            </div>
        </nav>
    ); 
}

export default Navbar; 
