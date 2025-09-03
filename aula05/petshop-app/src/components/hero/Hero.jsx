import './Hero.css';
import HeroImg from '../../assets/heroimg.svg';
import CTAButton from '../ctaBtn/CTAButton';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-content'>
                <span className='subtitle'>Pet Shop</span>
                <h1>Bem-vindo ao PetShop do "Fulano"!</h1>
                <p>Aqui você encontra tudo para seu animal de estimação ficar no estilo sempre!</p>
                <CTAButton text='Comprar Agora' />
            </div>
            <div className='hero-image-container'>
                <img src={HeroImg} alt='Imagem da Seção Hero' />
            </div>
        </section>
    );
};

export default Hero;
