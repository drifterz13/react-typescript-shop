import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

const GlobalStyle = createGlobalStyle`
  html, body {
    color: ${colors.primary};
    font-size: 18px;
    font-family: 'Fira Sans', sans-serif;
    height: 100%;
    background: ${colors.black};
    margin: 0;
  }

  a {
    color: ${colors.primary};
    text-decoration: none
  }

  a: hover {
    color: white
  }
`
export default GlobalStyle
