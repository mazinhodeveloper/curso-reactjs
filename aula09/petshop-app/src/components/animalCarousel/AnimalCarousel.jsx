import GatoImg from '../../assets/Gato.svg';
import HamsterImg from '../../assets/Hamster.svg';
import CachorroImg from '../../assets/Cachorro.svg';
import PapagaioImg from '../../assets/Papagaio.svg';
import CoelhoImg from '../../assets/Coelho.svg';
import TartarugaImg from '../../assets/Tartaruga.svg';
import Carousel from '../carousel/Carousel';
import AnimalCard from '../animalCard/animalCard';
import Navbar from '../navbar/Navbar';

const animais = [
    { name: 'Gato', image: GatoImg },
    { name: 'Hamster', image: HamsterImg },
    { name: 'Cachorro', image: CachorroImg },
    { name: 'Papagaio', image: PapagaioImg },
    { name: 'Coelho', image: CoelhoImg },
    { name: 'Tartaruga', image: TartarugaImg }
];

const AnimalCarousel = () => {
    return (
        <Carousel
            title={"Compre a partir do seu Pet"}
            items={animais}
            RenderComponent={({ item }) => <AnimalCard animal={item} />}
        />
    );
};

export default AnimalCarousel;
