import styled from 'styled-components';
import { LargeContainer } from '../../styles/globalstyles';

export const Header = styled.header`
    position: relative;
    height: 90px;
    background: ${props => props.theme.primary};
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
`
