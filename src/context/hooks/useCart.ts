import { useEffect, useState } from 'react'
import { IProduct } from '../../interfaces/product';

export default function useCart() {
    const [products, setProducts] = useState<IProduct[]>([{
        id: 'rafael',
        name: 'camiseta',
        price: 89.90,
        imgUrl: ''
    }]);
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const products = sessionStorage.getItem('products')

        if (products) {
            setProducts(JSON.parse(products))
        }

        setLoading(false)
    }, [])

    useEffect(() => {
        sessionStorage.setItem('products', JSON.stringify(products));
        let total = 0;
        products.forEach(product => {
            total += product.price
        })
        setTotal(parseFloat(total.toFixed(2)))
    }, [products])

    async function addItem(product: IProduct): Promise<boolean> {
        const result: Promise<boolean> = new Promise(resolve => {
            setTimeout(() => {
                setProducts((prevState) => [product, ...prevState]);
                sessionStorage.setItem('products', JSON.stringify(products));
                resolve(true)
            }, 1000);
        });
        return await result;
    }

    function removeItem(product: IProduct) {
        const productsCopy = [...products]
        const index = productsCopy.indexOf(product);
        productsCopy.splice(index, 1);
        setProducts([...productsCopy]);
        sessionStorage.setItem('products', JSON.stringify(productsCopy));
    }

    return { products, total, addItem, removeItem, loading }
}
