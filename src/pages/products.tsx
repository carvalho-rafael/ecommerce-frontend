import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { Main } from "../styles/pages/products";
import { Container } from "../styles/globalstyles"
import ProductCard from "../components/productCard";

import mShirt from '../assets/white-shirt.jpg'
import wPant from '../assets/women-pant.jpg'
import { IProduct } from "../interfaces/product";

interface Params {
    id: string
}

export default function Products() {
    const [products, setProducts] = useState<IProduct[]>();
    const params = useParams<Params>();

    useEffect(() => {
        if (params.id === '2') {
            setProducts([{
                id: '20',
                name: 'blusa',
                price: 30.55,
                imgUrl: mShirt
            }]);
            return
        }
        setProducts([{
            id: '40',
            name: 'short',
            price: 45.50,
            imgUrl: wPant
        }]);
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
                        <ProductCard product={product}></ProductCard>
                    ))}
                </Main>
        </Container>            
        </>
    )
}