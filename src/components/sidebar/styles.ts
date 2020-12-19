import styled from 'styled-components';

export const Aside = styled.aside`
    position: sticky;
    top: 0;
    width: 300px;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    float: left;

    a {
        display: block;
        width: 100%;
        font-size: 18px;
        padding: .5rem 0;
        padding-left: 1rem;
        border-radius: 5px;
        margin-bottom: .5rem;

        &:hover {
            background: ${props => props.theme.secondaryLight};
        }
        &.active {
            background: ${props => props.theme.secondary};
        }
    }
`
