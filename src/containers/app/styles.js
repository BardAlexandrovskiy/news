import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    border: 0;
    outline: 0;
    background: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    min-width: 320px;
  }

  .active {
    opacity: 0.5;
  }
`;
