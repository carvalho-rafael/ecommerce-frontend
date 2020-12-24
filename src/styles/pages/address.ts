import styled from 'styled-components';

export const FormContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.background2};
    padding: 20px;
    margin-top: 1rem;

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 500px;
    }
`
export const ProceedButton = styled.button`
    display: flex;
    align-items: center;
    width: max-content;
    padding: 1rem 2rem;
    margin-left: auto;
    text-align: center;

    background: ${props => props.theme.primaryDark};
    color: ${props => props.theme.textLight};
    border-radius: 5px;

    font-weight: bold;
    cursor: pointer;
    span {
        margin-left: 5px;
    }
    &:hover {
        background: ${props => props.theme.secondaryDark};
        transition: .1s all linear;
    }
`