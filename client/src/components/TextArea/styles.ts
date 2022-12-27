import styled, { css } from "styled-components";

interface ITextAreaStyledProps {
    size: string
}


export const Container = styled.div`
    text-align: left;

    label {
        font-size: 14px;
        font-weight: 500;
        line-height: 25px;

        span {
            color: var(--alert1);
        }
    }
`

export const TextAreaContainer = styled.textarea<ITextAreaStyledProps>`

    width: 100%;
    height: 90px;

    padding: 15px;

    border: 2px solid var(--grey7);
    border-radius: 4px;

    font-weight: 400;
    font-size: 16px;

    transition: .5s;

    &::placeholder {
        color: var(--grey3);
    }

    &:hover {
        border-color: var(--grey0);
    }

    ${({ size }) => {

switch(size) {

    case "textAreaCommentSize%":

        return css`
            height: 128px;
            width: 100%;
        `

    

    default:
        return false
}
}}

`