import Ilustracao from '../assets/cachorro.svg'

function Header() {
    return (
        <header>
            <h1>Bem-vindo ao PetShop do Pedro!</h1>
            <img src={Ilustracao} alt="Ilustração de PetShop" width={200} />
        </header>
    )
}

export default Header; 
