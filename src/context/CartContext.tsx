import React, { createContext } from 'react'
import useCart, { IProduct } from './hooks/useCart';

const CartContext = createContext({} as ICartContext);

interface ICartContext {
    products: any
    addItem: (product: IProduct) => void
    removeItem: (product: IProduct) => void
    loading: boolean
}

function CartProvider({ children }: any) {
    const { products, addItem, removeItem, loading } = useCart();

    return (
        <CartContext.Provider value={{ products, addItem, removeItem, loading }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider }
