import styled from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const ProductInfo = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

    p {
        margin-top: .5rem;
        font-size: 32px;
        font-weight: normal;
    }
`
export const PaymentInfo = styled.div`
    width: 400px;
    padding: 20px;
    margin-left: 30px;
    border-left: 2px solid ${props => props.theme.background2};

    p:first-child {
        margin: .5rem;
        margin-bottom: 1.5rem;
        font-size: 28px;
        font-weight: normal;
    }
`
const BaseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    padding: .5rem 1rem;
    margin-bottom: .5rem;
    background: ${props => props.theme.text};
    border: none;
    border-radius:  5px;
    color: ${props => props.theme.textLight};

    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme.textDark};
        transition: .2s linear all;
    }
`
export const AddToCartButton = styled(BaseButton)`
    background: ${props => props.theme.text};
`
export const BuyButton = styled(BaseButton)`
    background: ${props => props.theme.secondaryDark};
`
