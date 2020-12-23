import React, { createContext } from 'react'
import { IProduct } from '../interfaces/product';
import useCart from './hooks/useCart';

const CartContext = createContext({} as ICartContext);

interface ICartContext {
    products: IProduct[]
    total: number
    addItem: (product: IProduct) => Promise<boolean>
    removeItem: (product: IProduct) => void
    loading: boolean
}

function CartProvider({ children }: any) {
    const { products, total, addItem, removeItem, loading } = useCart();

    return (
        <CartContext.Provider value={{ products, total, addItem, removeItem, loading }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider }
