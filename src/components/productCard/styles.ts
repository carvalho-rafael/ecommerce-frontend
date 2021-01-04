import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    width: 280px;
    background: #ffffff;
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;

    &:hover {
        box-shadow: 1px 1px 4px gray;
    }

    img {
        width: 100%;
        height: 350px;
        object-fit: cover;
        cursor: pointer;
    }
    footer span:first-child {
        font-size: 20px;
    }
`
export const AddItemButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70px;
    height: 40px;
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
`