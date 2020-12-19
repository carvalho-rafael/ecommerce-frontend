import styled from 'styled-components';
import { device } from '../breackpoints';

export const Main = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    background: ${props => props.theme.primary};

    @media ${device.tablet} {
        flex-direction: row;
        height: 100vh;
    }
`
export const Banner = styled.aside`
    flex: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: ${props => props.theme.textLight};

    @media ${device.tablet} {
        flex: 1;
    }
`
export const FormContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    color: ${props => props.theme.primaryDark};
    width: 100%;
    height: 100%;
    padding: 20px;

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 400px;
    }
`
