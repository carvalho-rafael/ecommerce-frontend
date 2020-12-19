import styled, { createGlobalStyle } from 'styled-components'
import { device } from './breackpoints'

export default createGlobalStyle`
    body, html {
        margin: 0;
    }
    body {
        background: ${props => props.theme.background};
        color: ${props => props.theme.textDark}
    }
    * {
        box-sizing: border-box;
    }
    ol, ul {
	    list-style: none;
        margin-top: 0;
    }
`
export const Container = styled.div`
    margin: auto;
    position: relative;
    width: 100%;
    height: inherit;

    @media ${device.laptop} {
        width: 900px;
    }
    @media ${device.laptopL} {
        width: 1200px;
    }
    @media ${device.desktop} {
        width: 2100px;
    }
`
export const LargeContainer = styled.div`
    margin: auto;
    position: relative;
    width: 100%;
    height: inherit;

    @media ${device.laptop} {
        width: 1000px;
    }
    @media ${device.laptopL} {
        width: 1300px;
    }
    @media ${device.desktop} {
        width: 2300px;
    }
`
