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

    :root{
        --brand1: #4529E6;
        --brand2: #5126EA;
        --brand3: #B0A6F0;
        --brand4: #EDEAFD;

        --grey0: #0B0D0D;
        --grey1: #212529;
        --grey2: #495057;
        --grey3: #868E96;
        --grey4: #ADB5BD;
        --grey5: #CED4DA;
        --grey6: #DEE2E6;
        --grey7: #E9ECEF;
        --grey8: #F1F3F5;
        --grey9: #F8F9FA;
        --grey10: #FDFDFD;
        --whiteFixed: #FFFFFF;

        --alert1: #CD2B31;
        --alert1: #FDD8D8;
        --alert1: #FFE5E5;

        --sucess1: #18794E;
        --sucess2: #CCEBD7;
        --sucess3: #DDF3E4;

        --reandom1: #E34D8C;
        --reandom2: #C04277;
        --reandom3: #7D2A4D;
        --reandom4: #7000FF;
        --reandom5: #620033;
        --reandom6: #36007D;
        --reandom7: #349974;
        --reandom8: #2A7D5F;
        --reandom9: #153D2E;
        --reandom10: #6100FF;
        --reandom11: #5700E3;
        --reandom12: #30007D;
    }
`
