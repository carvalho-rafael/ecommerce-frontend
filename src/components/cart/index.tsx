import { CartContainer, CartButton, CartList } from './styles'
import { FiShoppingCart } from 'react-icons/fi'
import { useState } from 'react'

export default function Cart() {
    const [active, setActive] = useState(false)
    return (
        <CartContainer>
            <CartButton active={active} onClick={() => setActive(!active)}>
                <FiShoppingCart size={24} />
                <h3>cart</h3>
            </CartButton>
            <CartList active={active}>
                <li>
                    Item1
                </li>                <li>
                    Item1
                </li>                <li>
                    Item1
                </li>                <li>
                    Item1
                </li>
            </CartList>
        </CartContainer>
    )
}