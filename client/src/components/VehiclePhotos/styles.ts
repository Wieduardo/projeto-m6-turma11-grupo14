import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 516px;
    background-color: var(--brand1);

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
`

export const PrincipalContent = styled.div`
    width: 90%;
    max-width: 752px;
    height: 355px;
    background-color:var(--grey10);
    margin-top: 45px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PrincipalImage = styled.img`
    width: 90%;
    max-width: 441px;
    border-radius: 4px;
`