import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-family: 'Inter', sans-serif;
  }
  
  li,a {
    list-style-type: none;
  }

  button, input { 
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }

`
export default GlobalStyle