import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import Navbar from '../components/navbar'
import { Container } from '../styles/globalstyles'

import { ProductContainer, ProductInfo, PaymentInfo, AddToCartButton, BuyButton } from '../styles/pages/productDetail'
import { FiLoader, FiPlus, FiShoppingCart } from 'react-icons/fi'
import { IProduct } from "../interfaces/product";
import mShirt from "../assets/women-shoes.jpg"
import history from '../routes/history';

interface Params {
    id: string
}


export default function ProductDetail() {
    const [product, setProduct] = useState<IProduct>()
    const params = useParams<Params>();
    const [adding, setAdding] = useState(false)
    const { addItem } = useContext(CartContext)

    useEffect(() => {
        setProduct({
            id: params.id,
            name: 'blusa',
            price: 30.55,
            imgUrl: mShirt
        })
    }, [params.id])

    async function handleAddItem() {
        setAdding(true);
        if (product !== undefined) {
            const result = await addItem(product)
            if (result) {
                setAdding(false)
            }
        }
    }
    async function handleBuy() {
        setAdding(true);
        if (product !== undefined) {
            const result = await addItem(product)
            if (result) {
                setAdding(false)
                history.push('/checkout')
            }
        }
    }

    return (
        <>
            <Navbar />
            <Container>
                <ProductContainer>
                <ProductInfo>
                    <img src={product?.imgUrl} alt="" />
                    <p>{product?.name}</p>
                    <h2>Description</h2>
                </ProductInfo>
                <PaymentInfo>
                    <p>R$ {product?.price}</p>
                    <BuyButton disabled={adding} onClick={handleBuy}>
                    {adding ? (<FiLoader />) :
                        (<>
                            <span>Buy Now</span>
                        </>)
                    }
                    </BuyButton>
                    <AddToCartButton disabled={adding} onClick={handleAddItem}>
                        {adding ? (<FiLoader />) :
                            (<>
                                <span>Add to Cart</span>
                            </>)
                        }
                    </AddToCartButton>
                </PaymentInfo>
                </ProductContainer>
            </Container>
        </>
    )
}