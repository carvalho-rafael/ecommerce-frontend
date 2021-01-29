import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { Main } from "../styles/pages/products";
import { Container } from "../styles/globalstyles"
import ProductCard from "../components/productCard";

import { IProduct } from "../interfaces/product";
import api from "../services";

interface Params {
    id: string
}

export default function Products() {
    const [products, setProducts] = useState<IProduct[]>();
    const params = useParams<Params>();

    useEffect(() => {
        api.get(`products?category=${params.id}`).then(response => {
            const products = response.data;
            setProducts(products);
        })
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