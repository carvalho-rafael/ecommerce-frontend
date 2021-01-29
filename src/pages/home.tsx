import { useEffect, useState } from "react";

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { Main } from "../styles/pages/home";
import { Container } from "../styles/globalstyles"
import ProductCard from "../components/productCard";

import mShirt from '../assets/white-shirt.jpg'
import bag from '../assets/bag-1.jpg'
import { IProduct } from "../interfaces/product";

export default function Home() {
    const [products, setProducts] = useState<IProduct[]>();

    useEffect(() => {
        setProducts([{
            _id: '20',
            name: 'blusa',
            price: 30.55,
            image: mShirt
        },
        {
            _id: '50',
            name: 'bolsa',
            price: 110.00,
            image: bag
        }]);
        return
    }, [])

    return (
        <>
            <Navbar />
            <Container>
                <Sidebar />
                <Main>
                    <h1>Lançamentos</h1>
                    {products?.map((product, index) => (
                        <ProductCard key={index} product={product}></ProductCard>
                    ))}
                </Main>
            </Container>
        </>
    )
}