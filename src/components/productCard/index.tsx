import { Card, AddItemButton } from "./styles";
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

import { FiLoader, FiPlus, FiShoppingCart } from "react-icons/fi";
import { IProduct } from "../../interfaces/product";

interface IProps {
    product: IProduct
}

export default function ProductCard({ product }: IProps) {
    const [adding, setAdding] = useState(false)
    const { addItem } = useContext(CartContext)

    async function handleAddItem() {
        setAdding(true);
        const result = await addItem(product);
        if (result) {
            setAdding(false)
        }
    }

    return (
        <Card>
            <img src={product.imgUrl} alt="" />
            <footer>
                <span>R$ {product.price}</span> <br />
                <span>{product.name}</span> <br />
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
