import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
    }
    body{
        background-color: #393636;
    }
    button:hover{
        cursor: pointer;
    }
    li{
        list-style-type: none;
    }
`
