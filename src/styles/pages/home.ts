import styled from 'styled-components';

export const Main = styled.main`
    width: calc(100% - 300px);
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 100px;

    h1 {
        width: 100%;

        color:${props => props.theme.text}
    }
`
