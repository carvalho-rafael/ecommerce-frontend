import React, { createContext } from 'react'
import useCart, { IProduct } from './hooks/useCart';

const CartContext = createContext({} as ICartContext);

interface ICartContext {
    products: any
    total: number
    addItem: (product: IProduct) => void
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
