import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
`
export const Banner = styled.aside`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

`
export const FormContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #4D6F80;
    background: ${props => props.theme.primary};
    width: 100%;
    height: 100%;
    padding: 20px;

    form {
        width: 100%;
        max-width: 400px;
    }
`
