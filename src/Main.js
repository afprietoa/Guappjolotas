import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Monoscape',sans-serif;
}

`
export const Container = styled.div`
    width: 100;
    max-width:1300px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 50px;
    padding-right: 50px;
`
export default GlobalStyle