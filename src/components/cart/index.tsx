import { CartContainer, CartButton, CartList } from './styles'
import { FiShoppingCart } from 'react-icons/fi'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
    const [active, setActive] = useState(false)
    const { products, total } = useContext(CartContext)

    return (
        <CartContainer>
            <CartButton active={active} onClick={() => setActive(!active)}>
                <FiShoppingCart size={24} />
                <h3>cart</h3>
                <span>{products?.length}</span>
            </CartButton>
            <CartList active={active}>
                {products?.map((product) => (
                    <li key={product.id}>
                        <img src={product.imgUrl} alt="" />
                        <div>
                            {product.name} <br />
                        R$ {product.price}
                        </div>
                    </li>
                ))}
                <Link to='/login'>
                    Total: R$ {total} <br />
                   Checkout
                </Link>
            </CartList>
        </CartContainer>
    )
}