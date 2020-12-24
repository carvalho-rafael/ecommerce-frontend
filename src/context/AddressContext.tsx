import React, { createContext } from 'react'
import { IAddress } from '../interfaces/address';
import useAddress from './hooks/useAddress';

const AddressContext = createContext({} as IAddressContext);

interface IAddressContext {
    address: IAddress | undefined
    loading: boolean
    handleAddress: (address: IAddress) => void
}

function AddressProvider({ children }: any) {
    const { address, handleAddress, loading } = useAddress();

    return (
        <AddressContext.Provider value={{ address, handleAddress, loading }}>
            {children}
        </AddressContext.Provider>
    );
}

export { AddressContext, AddressProvider }
