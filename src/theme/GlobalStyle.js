import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

*, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

}

html{
   font-size: 62.5%
}

body{
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    padding: 80px;
}
`;

export default GlobalStyle;
