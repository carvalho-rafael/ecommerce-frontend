import styled from 'styled-components';

export const InputBlock = styled.div`
    margin-bottom: 1em;

    label {
        margin-bottom: .5em;
        display: block;
    }
`
export const TextInput = styled.input`
    width: 100%;
    height: 48px;
    padding: 0 16px;
    background: #F5F8FA;
    border: 1px solid #D3E2E5;
    border-radius: .5em;
    outline: none;
    color: #5C8599;
`
export const SubmitButton = styled.button`
    width: 100%;
    max-width: 300px;
    padding: 1.5em 2em;
    margin: auto;
    margin-top: 1rem;

    background: ${props => props.theme.primary};
    color: ${props => props.theme.textLight};
    border-color: ${props => props.theme.primaryDark};
    border-radius: 5px;

    font-weight: bold;
    cursor: pointer;
`
