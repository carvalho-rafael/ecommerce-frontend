import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { Main } from "../styles/pages/home";
import { Container } from "../styles/globalstyles"
import ProductCard from "../components/productCard";

import mShirt from '../assets/white-shirt.jpg'

export default function Home() {
    return (
        <>
            <Navbar />
            <Container>
                <Sidebar />
                <Main>
                    <ProductCard imgUrl={mShirt}></ProductCard>
                    <ProductCard imgUrl={mShirt}></ProductCard>
                    <ProductCard imgUrl={mShirt}></ProductCard>
                    <ProductCard imgUrl={mShirt}></ProductCard>
                    <ProductCard imgUrl={mShirt}></ProductCard>
                </Main>
            </Container>
        </>
    )
}