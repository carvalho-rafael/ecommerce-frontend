import { CartContainer, CartButton, CartList } from './styles'
import { FiShoppingCart } from 'react-icons/fi'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

interface Product {
    id: string
    name: string
    price: string
    imgUrl: string
}

export default function Cart() {
    const [active, setActive] = useState(false)
    const { products } = useContext(CartContext)

    return (
        <CartContainer>
            <CartButton active={active} onClick={() => setActive(!active)}>
                <FiShoppingCart size={24} />
                <h3>cart</h3>
            </CartButton>
            <CartList active={active}>
                {products?.map((product: Product) => (
                    <li>
                        <img src={product.imgUrl} alt="" />
                        <div>
                            {product.name} <br />
                        R$ {product.price}
                        </div>
                    </li>
                ))}
                <Link to='/login'>
                    Total: R$ 300,00 <br/>
                    Checkout
                </Link>
            </CartList>
        </CartContainer>
    )
}