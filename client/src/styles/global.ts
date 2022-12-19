import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body {
        background-color: #FFFFFF;
        color: #000;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield;
    }

    &:focus::-webkit-input-placeholder {
        color: transparent;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`
