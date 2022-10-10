import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
* {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    };
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(2,2,46);
  background: linear-gradient(90deg, rgba(2,2,46,1) 0%, rgba(9,29,117,1) 100%);
  width: 100vw;
  height: 100vh;
}
`;

export default GlobalStyle;
