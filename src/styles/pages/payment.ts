import styled from 'styled-components';

export const OrderContainer = styled.div`
    width: calc(100% - 400px);
    padding: 1rem;
    float: left;
`
export const PaymentContainer = styled.div`
    width: 400px;
    padding: 1rem;
    float: right;
`
export const ShippingAddress = styled.div`
    padding: .5rem;
    border: 2px solid ${props => props.theme.background2}
`
export const CartList = styled.div`
    padding: .5rem;
    margin-top: 1rem;
    border: 2px solid ${props => props.theme.background2}
`
export const CartListItem = styled.div`
    display: flex;
    justify-content: start;
    padding: .5rem;
    font-size: 14px;
    width: 100%;

    img {
        width: 40px;
        height: auto;
        align-self: flex-start;
    }
    div {
        margin-left: .5rem;
        width: 100%;
        span {
            overflow: hidden;
            white-space: nowrap;
            display: block;
            width: calc(100% - 50px);
            text-overflow: ellipsis;
        }
        &:hover span{
            white-space: normal;
            
        }  
     
    }

`