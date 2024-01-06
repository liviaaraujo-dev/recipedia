import {createGlobalStyle} from "styled-components"

 export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
    }

    body{
        font-family: 'Inter', sans-serif;
    }

    a{
        text-decoration: none;
    }

    main{
        margin-top: 4rem;
    }

@media (min-width: 900px){

    main{
        margin-top: 6rem;

    }
}
`
