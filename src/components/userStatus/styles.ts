import styled from 'styled-components';

export const UserStatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    padding: 1rem;
    height: inherit;
    color: ${props => props.theme.textLight};

    button {
        padding: 5px;
        margin-top: 5px;
        background: ${props => props.theme.primaryDark};
        color: ${props => props.theme.textLight};
        cursor: pointer;
    }
`