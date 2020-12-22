import { Card } from "./styles";
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import example from '../../assets/bag-1.jpg'
import { FiPlus, FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ imgUrl }: any) {

    const { addItem } = useContext(CartContext)

    return (
        <Card>
            <img src={imgUrl} alt="" />
            <footer>
                <span>R$ 300,00</span> <br/>
                <span>Nome do produto</span> <br/>
                <button onClick={() => addItem({id: '50', name: 'noo', price: 10.99, imgUrl: example})}>
                    <FiPlus size={18}/>
                    <FiShoppingCart size={18}/>
                </button>
            </footer>
        </Card>
    )
}
