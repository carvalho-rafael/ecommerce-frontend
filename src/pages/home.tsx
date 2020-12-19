import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { Main } from "../styles/pages/home";
import { Container } from "../styles/globalstyles"
import ProductCard from "../components/productCard";

import mShirt from '../assets/white-shirt.jpg'
import wPant from '../assets/women-pant.jpg'

interface Products {
    imgUrl: string
}

interface Params {
    id: string
}

export default function Home() {
    const [products, setProducts] = useState<Products[]>();
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
                    {products?.map((product, index) => (
                        <ProductCard key={index} imgUrl={product.imgUrl}></ProductCard>
                    ))}
                </Main>
            </Container>
        </>
    )
}