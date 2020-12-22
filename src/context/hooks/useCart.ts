import { useEffect, useState } from 'react'

export interface IProduct {
    id: string
    name: string
    price: string
    imgUrl: string
}

export default function useCart() {
    const [products, setProducts] = useState<IProduct[]>([{
        id: 'rafael',
        name: 'camiseta',
        price: '89.90',
        imgUrl: ''
    }]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const products = localStorage.getItem('products')

        if (products) {
            setProducts(JSON.parse(products))
        }

        setLoading(false)
    }, [])

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products])

    function addItem(product: IProduct) {

        setProducts([product, ...products]);
        localStorage.setItem('products', JSON.stringify(products));
        console.log(products)
    }

    function removeItem(product: IProduct) {
        const  productsCopy = [...products]
        const index = productsCopy.indexOf(product);
        productsCopy.splice(index ,1);
        setProducts([...productsCopy]);
        localStorage.setItem('products', JSON.stringify(productsCopy));
    }

    return { products, addItem, removeItem, loading }
}
