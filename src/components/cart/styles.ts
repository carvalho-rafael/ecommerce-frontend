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
`
export const CartList = styled.ul<ICard>`
    position: absolute;
    display: ${props => props.active ? 'block' : 'none'};
    right: 0px;
    top: 90px;

    li {
        width: 300px;
        padding: .5rem;
        background: ${props => props.theme.secondaryDark};
        color: ${props => props.theme.textLight};
    }
`