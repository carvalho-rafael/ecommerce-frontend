import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { Main } from "../styles/pages/products";
import { Container } from "../styles/globalstyles"
import ProductCard from "../components/productCard";

import mShirt from '../assets/white-shirt.jpg'
import wPant from '../assets/women-pant.jpg'

interface IProducts {
    imgUrl: string
}

interface Params {
    id: string
}

export default function Products() {
    const [products, setProducts] = useState<IProducts[]>();
    const params = useParams<Params>();

    useEffect(() => {
        if (params.id === '2') {
            setProducts([{ imgUrl: mShirt }, { imgUrl: mShirt }, { imgUrl: mShirt }, { imgUrl: mShirt },]);
            return
        }
        setProducts([{ imgUrl: wPant }, { imgUrl: wPant }, { imgUrl: wPant }, { imgUrl: wPant },]);
    }, [params.id])

    return (
        <>
            <Navbar />
            <Container>
                <Sidebar />
                <Main>
                    <header>
                        <h3>
                            As melhores roupas do mercado com algodã0 100%.
                    </h3>
                        <p>
                            *Não testado em animais.
                    </p>

                    </header>
                    {products?.map((product, index) => (
                        <ProductCard key={index} imgUrl={product.imgUrl}></ProductCard>
                    ))}
                </Main>
            </Container>            
        </>
    )
}