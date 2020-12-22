import { Card, AddItemButton } from "./styles";
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

import example from '../../assets/bag-1.jpg'
import { FiLoader, FiPlus, FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ imgUrl }: any) {
    const [adding, setAdding] = useState(false)
    const { addItem } = useContext(CartContext)

    async function handleAddItem() {
        setAdding(true);
        const result = await addItem({ id: '50', name: 'noo', price: 10.99, imgUrl: example });
        if (result) {
            setAdding(false)
        }
    }
    
    return (
        <Card>
            <img src={imgUrl} alt="" />
            <footer>
                <span>R$ 300,00</span> <br />
                <span>Nome do produto</span> <br />
                <AddItemButton disabled={adding} onClick={handleAddItem}>
                    {adding ? (<FiLoader />) :
                        (<>
                            <FiPlus size={18} />
                            <FiShoppingCart size={18} />
                        </>)
                    }
                </AddItemButton>
            </footer>
        </Card >
    )
}
