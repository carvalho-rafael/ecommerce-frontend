import React, { FormEvent, useState, useContext } from 'react'

import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom';
import { Banner, FormContainer, Main } from '../styles/pages/login';
import { InputBlock, SubmitButton, TextInput } from '../styles/form';

import logo from '../assets/logo.png'

export default function Payment() {
    const { authenticated, user, handleLogin } = useContext(AuthContext)
    console.log(authenticated, user);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        handleLogin(email, password)
    }

    return (
        <Main>
            <FormContainer>
                <h1>Payment page</h1>
                <form onSubmit={handleSubmit}>
                    <InputBlock>
                        <label htmlFor="email">Email</label>
                        <TextInput id="name" type="text" value={email} onChange={event => setEmail(event.target.value)} />
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="password">Password</label>
                        <TextInput id="password" type="password" value={password} onChange={event => setPassword(event.target.value)} />
                    </InputBlock>
                    <SubmitButton type="submit">
                        Login
                    </SubmitButton>
                </form>
            </FormContainer>
        </Main>
    )
}