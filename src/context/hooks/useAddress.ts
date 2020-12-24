import { useEffect, useState } from 'react'
import { IAddress } from '../../interfaces/address';
import history from '../../routes/history';

export default function useAddress() {
    const [loading, setLoading] = useState(true);
    const [address, setAddress] = useState<IAddress>()

    useEffect(() => {
        const address = localStorage.getItem('address')

        if (address) {
            setAddress(JSON.parse(address))
        }

        setLoading(false)
    }, [])

    function handleAddress(address : IAddress) {
        localStorage.setItem('address', JSON.stringify(address));
        setAddress(address);
        history.push('/payment');
    }

    return { address, handleAddress, loading }
}