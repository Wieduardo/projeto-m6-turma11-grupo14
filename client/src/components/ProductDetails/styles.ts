import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 516px;

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
    top: -100px;
    padding-left: 28px;

    @media (max-width: 720px){
        height: 355px;
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

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;

    @media (min-width: 557px){
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`

export const Description = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: var(--grey1);
`

export const MoreInfos = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 32px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: var(--brand1);

    @media (min-width: 557px){
        margin-bottom: 0px;
    }
`


export const CarInfo = styled.div`
    width: 51px;
    height: 32px;
    background-color: var(--brand4);
    margin-right: 12px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CarPrice = styled.p`
    width: 113px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: var(--grey1);
`