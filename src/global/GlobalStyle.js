import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a{
       text-decoration: none;
    }

    .ReactModal__Overlay {
        opacity: 0;
        transition: opacity 200ms ease-in-out;
    }

    .ReactModal__Overlay--after-open{
        opacity: 1;
    }

    .ReactModal__Overlay--before-close{
        opacity: 0; 
    }
`;