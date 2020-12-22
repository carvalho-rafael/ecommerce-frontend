import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    width: 280px;
    background: #ffffff;
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;

    img {
        width: 100%;
        height: 350px;
        object-fit: cover;
    }
    footer span:first-child {
        font-size: 20px;
    }
    footer button {
        display: block;
        width: max-content;
        padding: .5rem 1rem;
        margin-left: auto;
        background: ${props => props.theme.secondaryDark};
        border: none;
        color: ${props => props.theme.textLight};

        font-weight: bold;
        cursor: pointer;

        &:hover {
            background: ${props => props.theme.textDark};
            transition: .2s linear all;
        }
    }
`
