import styled from 'styled-components';
import { LargeContainer } from '../../styles/globalstyles';

export const Header = styled.header`
    position: relative;
    height: 90px;
    background: ${props => props.theme.primary};
    border-bottom: 5px solid ${props => props.theme.secondary};
    color: ${props => props.theme.textLight};
    z-index: 999;
    
    img {
        height: 100%;
    }
`
export const HeaderContainer = styled(LargeContainer)`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;

    nav {
        display:flex;
        justify-content: center;
        align-items: center;
    }
`
