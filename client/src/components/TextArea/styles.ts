import styled from "styled-components";

export const Container = styled.div`
    text-align: left;

    label {
        font-size: 14px;
        font-weight: 500;
        line-height: 25px;

        span {
            color: #c20707;
        }
    }
`

export const TextAreaContainer = styled.textarea`

    width: 100%;
    height: 90px;

    padding: 15px;

    border: 2px solid #E9ECEF;
    border-radius: 4px;

    font-weight: 400;
    font-size: 16px;

    transition: .5s;

    &::placeholder {
        color: #868E96;
    }

    &:hover {
        border-color: #000;
    }

`