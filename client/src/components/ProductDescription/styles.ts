import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
`

export const PrincipalContent = styled.div`
    width: 90%;
    max-width: 752px;
    
    background-color: var(--grey10);
    position: relative;
    top: -350px;
    padding-left: 28px;

    @media (max-width: 720px){
        height: 355px;
        top: -250px;
    }
    height: 240px;
    
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;

    @media (min-width: 1240px){
        left: -242px;
    }
`

export const Title = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: var(--grey1);
`

export const Description = styled.p`  
    text-align: justify;
    width: 90%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: var(--grey2);
`
