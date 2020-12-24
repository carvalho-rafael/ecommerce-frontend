import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CartContainer = styled.div`
    height: 100%;
    position: relative;
    margin-top: 1rem;

    h2 {
        text-align: center;
    }
`
export const CartListItem = styled.ul`

    display: flex;
    align-items: center;
    justify-content:  space-between;
    padding: .5rem;
    background: ${props => props.theme.background2};
    color: ${props => props.theme.textDark};
    div {
        display: flex;
        div {
            display: flex;
            flex-direction: column;
        }
    }
    &:hover {
        background: ${props => props.theme.secondaryLight};
    }
    img {
        height: 100%;
        width: 80px;
        margin-right: 1rem;
        object-fit: cover;
    }
    button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: transparent;
        border: none;
        cursor: pointer;
        span {
            margin-left: 5px;
        }
    }
`
export const ProceedButton = styled(Link)`
    display: flex;
    align-items: center;
    width: max-content;
    padding: 1rem 2rem;
    margin-left: auto;
    text-align: center;

    background: ${props => props.theme.primaryDark};
    color: ${props => props.theme.textLight};
    border-radius: 5px;

    font-weight: bold;
    cursor: pointer;
    span {
        margin-left: 5px;
    }
    &:hover {
        background: ${props => props.theme.secondaryDark};
        transition: .1s all linear;
    }
`
