import { CartContainer, CartListItem, ProceedButton } from '../styles/pages/checkout'
import { FiArrowRight, FiArrowRightCircle, FiTrash } from 'react-icons/fi'
import { useContext, useState } from 'react'
import { CartContext } from './../context/CartContext'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'
import { Container } from '../styles/globalstyles'

export default function Checkout() {
    const { products, total, removeItem } = useContext(CartContext)

    return (
        <>
            <Navbar />
            <CartContainer>
                <Container>
                    <ul >
                        {products?.map((product, index) => (
                            <CartListItem key={index}>
                                <div>
                                    <img src={product.imgUrl} alt="" />
                                    <div>
                                        {product.name} <br />
                                        R$ {product.price}
                                        <span>My Description ...</span>
                                    </div>
                                </div>
                                <button onClick={() => removeItem(product)}>
                                    <FiTrash size={18} />
                                    <span>Deletar do carrinho</span>
                                </button>
                            </CartListItem>
                        ))}
                    </ul>
                    {products.length > 0 ? (
                        <ProceedButton to='/payment'>
                            Total: R$ {total} Prosseguir
                            <span><FiArrowRightCircle size={24} /></span>
                        </ProceedButton>
                    ) : (
                            <p>Nenhum produto adicionado ao carrinho</p>
                        )}

                </Container>
            </CartContainer>
        </>
    )
}