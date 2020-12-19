import styled, { createGlobalStyle } from 'styled-components'
import { device } from './breackpoints'

export default createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }
    body {
        background: ${props => props.theme.background};
        color: ${props => props.theme.textDark};

        font-family: 'Oxygen', sans-serif;
        font-weight: lighter;
    }
    * {
        box-sizing: border-box;
    }
    ol, ul {
	    list-style: none;
        margin-top: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`
export const Container = styled.div`
    margin:auto;
    position: relative;
    width: 100%;
    height: inherit;

    @media ${device.laptop} {
        width: calc(900px - (100vw - 100%));
    }
    @media ${device.laptopL} {
        width: calc(1200px - (100vw - 100%));
    }
    @media ${device.desktop} {
        width: calc(2100px - (100vw - 100%));
    }
`
export const LargeContainer = styled.div`
    margin: auto;
    position: relative;
    width: 100%;
    height: inherit;

    @media ${device.laptop} {
        width: calc(1000px - (100vw - 100%));
    }
    @media ${device.laptopL} {
        width: calc(1300px - (100vw - 100%));
    }
    @media ${device.desktop} {
        width: calc(2300px - (100vw - 100%));
    }
`
