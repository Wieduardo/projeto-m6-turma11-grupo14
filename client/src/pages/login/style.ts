import styled from "styled-components"


const Container = styled.div`

    & > div {

        width: 100%;

        height: 786px;
        background-color: #F1F3F5;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 20px;
    }

    @media (min-width: 1440px) {

        & > div {

            height: 100vh;
        }
    }
`

export { Container }
