import React, { FormEvent, useState, useContext } from 'react'

import { Context } from '../context/AuthContext'
import { Link } from 'react-router-dom';
import { Banner, FormContainer, Main } from '../styles/pages/login';
import { InputBlock, SubmitButton, TextInput } from '../styles/form';

export default function Login() {
    const { authenticated, user, handleLogin } = useContext(Context)
    console.log(authenticated, user);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        handleLogin(email, password)
    }

    return (
        <Main>
            <Banner>
                <Link to="/">
                </Link>
                <h1>Leve felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </Banner>
            <FormContainer>
                <h1>Login</h1>
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