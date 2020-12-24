import React, { FormEvent, useState, useContext } from 'react'

import { FormContainer, ProceedButton } from '../styles/pages/address';
import { InputBlock, TextInput } from '../styles/form';

import Navbar from '../components/navbar';
import { Container } from '../styles/globalstyles';
import { AddressContext } from '../context/AddressContext';
import { IAddress } from '../interfaces/address';
import { FiArrowRightCircle } from 'react-icons/fi';

export default function Address() {
    const { handleAddress } = useContext(AddressContext)

    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [district, setDistrict] = useState('')
    const [postalCode, setPostalCode] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        const fullAddress: IAddress = {
            name,
            country,
            state,
            city,
            address,
            district,
            postalCode
        }
        handleAddress(fullAddress)
    }

    return (
        <>
        <Navbar />
        <Container>
            <FormContainer>
                <h1>Selecione o Endereço de entrega</h1>
                <form onSubmit={handleSubmit}>
                    <InputBlock>
                        <label htmlFor="Name">Nome Completo</label>
                        <TextInput id="Name" type="text" value={name} onChange={event => setName(event.target.value)} />
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="Country">Country</label>
                        <TextInput id="Country" type="password" value={country} onChange={event => setCountry(event.target.value)} />
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="State">State</label>
                        <TextInput id="State" type="password" value={state} onChange={event => setState(event.target.value)} />
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="City">City</label>
                        <TextInput id="City" type="password" value={city} onChange={event => setCity(event.target.value)} />
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="District">District</label>
                        <TextInput id="District" type="password" value={district} onChange={event => setDistrict(event.target.value)} />
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="PostalCode">PostalCode</label>
                        <TextInput id="PostalCode" type="password" value={postalCode} onChange={event => setPostalCode(event.target.value)} />
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="Address">Address</label>
                        <TextInput id="Address" type="password" value={address} onChange={event => setAddress(event.target.value)} />
                    </InputBlock>
                    <ProceedButton type="submit">
                        Continuar
                        <span><FiArrowRightCircle size={24} /></span>
                    </ProceedButton>
                </form>
            </FormContainer>
        </Container>
        </>
    )
}