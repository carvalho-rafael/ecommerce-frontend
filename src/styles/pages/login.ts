import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.primary};
`
export const Banner = styled.aside`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: ${props => props.theme.textLight};

`
export const FormContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.background};
    width: 100%;
    height: 100%;
    padding: 20px;

    form {
        width: 100%;
        max-width: 400px;
    }
`
