import { CartContainer, CartListItem, ProceedButton } from '../styles/pages/checkout'
import { FiArrowRightCircle, FiTrash } from 'react-icons/fi'
import { useContext } from 'react'
import { CartContext } from './../context/CartContext'
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
                                    <img src={`http://localhost:3003/images/${product.image}`} alt="" />
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
                    <h2> Total: R$ {total} </h2>
                    {products.length > 0 ? (
                        <ProceedButton to='/address'>
                            Prosseguir
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