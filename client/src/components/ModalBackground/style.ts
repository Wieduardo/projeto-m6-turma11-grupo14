import styled from "styled-components";

const Container = styled.div`

    display: flex;
    justify-content: center;

    padding: 80px;

    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        padding: 40px;
    }

    @media (max-width: 375px) {
        padding: 20px;
    }
`

export { Container }
