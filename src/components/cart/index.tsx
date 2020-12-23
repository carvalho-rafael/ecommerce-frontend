import { CartContainer, CartButton, CartList } from './styles'
import { FiShoppingCart, FiTrash } from 'react-icons/fi'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
    const [active, setActive] = useState(false)
    const { products, total, removeItem } = useContext(CartContext)

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
                        <div>
                            <img src={product.imgUrl} alt="" />
                            <div>
                                {product.name} <br />
                                R$ {product.price}
                            </div>
                        </div>
                        <button>
                            <FiTrash onClick={() => removeItem(product)} size={18} />
                        </button>
                    </li>
                ))}
                {products.length > 0 ? (
                    <Link to='/login'>
                        Total: R$ {total} <br />
                        Checkout
                    </Link>
                ) : (
                    <p>Nenhum produto adicionado</p>
                )}
            </CartList>
        </CartContainer>
    )
}