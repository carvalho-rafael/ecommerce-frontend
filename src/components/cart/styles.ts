import styled from 'styled-components';
interface ICard {
    active: boolean
}
export const CartContainer = styled.div`
    height: 100%;
    position: relative;
`
export const CartButton = styled.div<ICard>`
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    background: ${props => props.active ? props.theme.primaryDark : props.theme.primary};
    color: ${props => props.theme.textLight};
    border-bottom: 5px solid ${props => props.theme.secondary};

    transition: .2s all linear;
    cursor: pointer;

    &:hover{
        background: ${props => props.theme.primaryDark};
    }
    h3 {
        margin-left: .5rem;
    }
    span{
        position: absolute;
        top: 18px;
        left: 18px;

        font-weight: bold;
        color: ${props => props.theme.secondary};
    }
`
export const CartList = styled.ul<ICard>`
    position: absolute;
    max-height: 150px; 
    display: ${props => props.active ? 'block' : 'none'};
    right: 0px;
    top: 90px;

    overflow-y: auto;

    li {
        display: flex;
        height: 50px;
        align-items: center;
        width: 250px;
        padding: .5rem;
        background: ${props => props.theme.secondaryDark};
        color: ${props => props.theme.textLight};
        img {
            height: 100%;
            width: 30px;
            margin-right: 1rem;
            object-fit: cover;
        }
    }
    a {
        display: block;
        width: 100%;
        padding: 1rem;
        text-align: center;

        background: ${props => props.theme.textDark};
        color: ${props => props.theme.textLight};
    }
`