import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
& body {
    box-sizing: border-box;
    background-color: #F5F5F5;
    cursor: pointer;
    margin: 0;
    padding: 0;
    line-height: 1;
    width: 100vw;
    overflow-x: hidden;
}
& ol, ul, li {
    list-style: none;
}
& a {
    text-decoration: none;
    color: black;
}
& textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
& .Container {
    margin: 0 16px 0 16px;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}

`;
