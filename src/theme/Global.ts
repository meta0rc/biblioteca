import { createGlobalStyle } from "styled-components";
import "@fontsource/nunito"

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        border: none;
        text-decoration: none;
        list-style: none;
        font-family: Nunito;
    }
    body {
        background: ${props => props.theme.colors.bg}
    }
`