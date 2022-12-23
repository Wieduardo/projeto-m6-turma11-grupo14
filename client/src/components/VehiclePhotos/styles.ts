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
    background-color: #FDFDFD;
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

export const SecondaryContent = styled.aside`
    display: none;
    background-color: #FDFDFD;
    width: 440px;
    height: 377px;
    margin-top: 45px;
    margin-left: 46px;
    border-radius: 4px;
    padding-left: 51px;

    @media (min-width: 1240px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
`

export const ImageSection = styled.div`
    width: 352px;
    height: 248px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

export const Photo = styled.img`
    width: 108px;
`