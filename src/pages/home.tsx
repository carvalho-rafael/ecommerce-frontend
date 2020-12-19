import { useEffect, useState } from "react";

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { Main } from "../styles/pages/home";
import { Container } from "../styles/globalstyles"
import ProductCard from "../components/productCard";

import mShirt from '../assets/white-shirt.jpg'
import wPant from '../assets/women-pant.jpg'
import bag from '../assets/bag-1.jpg'

interface Products {
    imgUrl: string
}


export default function Home() {
    const [products, setProducts] = useState<Products[]>();

    useEffect(() => {
        setProducts([{ imgUrl: mShirt }, { imgUrl: wPant }, { imgUrl: bag }, { imgUrl: wPant },]);
    }, [])

    return (
        <>
            <Navbar />
            <Container>
                <Sidebar />
                <Main>
                    <h1>Lançamentos</h1>
                    {products?.map((product, index) => (
                        <ProductCard key={index} imgUrl={product.imgUrl}></ProductCard>
                    ))}
                </Main>
            </Container>
        </>
    )
}