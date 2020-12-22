import { Card } from "./styles";
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import example from '../../assets/bag-1.jpg'

export default function ProductCard({ imgUrl }: any) {

    const { addItem } = useContext(CartContext)

    return (
        <Card>
            <img src={imgUrl} alt="" />
            <footer>
                <h3>R$ 300,00</h3>
                <p>Nome do produto</p>
                <button onClick={() => addItem({id: '50', name: 'noo', price: '989898', imgUrl: example})}>Add to cart</button>
            </footer>
        </Card>
    )
}
