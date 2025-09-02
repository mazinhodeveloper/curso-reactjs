import Carousel from "../carousel/Carousel";
import CategoryCard from "../categoryCard/CategoryCard";

const lista = [
    {
        title: "Acessórios",
        productCount: 64,
        image: "https://site.petesperanca.com.br/wp-content/uploads/2023/10/Variedade_Produto.jpeg"
    },
    {
        title: "Acessórios",
        productCount: 62,
        image: "https://tse1.mm.bing.net/th/id/OIP.cuvthSidlgfJp4pyjnziqAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        title: "Acessórios",
        productCount: 63,
        image: "https://site.petesperanca.com.br/wp-content/uploads/2023/10/Variedade_Produto.jpeg"
    },
    {
        title: "Acessórios",
        productCount: 64,
        image: "https://site.petesperanca.com.br/wp-content/uploads/2023/10/Variedade_Produto.jpeg"
    },
    {
        title: "Acessórios",
        productCount: 65,
        image: "https://site.petesperanca.com.br/wp-content/uploads/2023/10/Variedade_Produto.jpeg"
    },
    {
        title: "Acessórios",
        productCount: 66,
        image: "https://site.petesperanca.com.br/wp-content/uploads/2023/10/Variedade_Produto.jpeg"
    },
    {
        title: "Acessórios",
        productCount: 67,
        image: "https://site.petesperanca.com.br/wp-content/uploads/2023/10/Variedade_Produto.jpeg"
    },
    {
        title: "Acessórios",
        productCount: 68,
        image: "https://site.petesperanca.com.br/wp-content/uploads/2023/10/Variedade_Produto.jpeg"
    }
]

const CategoryCarousel = () => {
    return (
        <Carousel 
            title={"Pesquise por Categoria"} 
            items={lista} 
            RenderComponent={({item}) => <CategoryCard categoria={item} />} 
        />
    );
}

export default CategoryCarousel; 
