import styled from 'styled-components';

export const MenuContainer = styled.ul`
    position: sticky;
    top: 0;
    float: left;
    width: 230px;
    height: 100vh;
    background: ${props => props.theme.primary};

    li a {
        display: block;
        width: 100%;
        font-weight: bold;
        padding: 1rem 0;
        padding-left: 1rem;
        color: ${props => props.theme.textLight};

        &:hover {
            border-left: 10px solid ${props => props.theme.secondary};
            transition: all .1s linear;
        }
        &.active {
            border-left: 10px solid ${props => props.theme.secondaryDark};
        }
    }
`
export const StatusContainer = styled.header`
    height: 110px;
`