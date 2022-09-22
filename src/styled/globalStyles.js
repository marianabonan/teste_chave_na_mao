import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
    }
    button:houver{
        cursor: pointer;
    }
    li{
        list-style-type: none;
    }

    :root{
        primary: #1E1E1E;
        secondy: #393636;
        tertiary: #936262
    }
`
