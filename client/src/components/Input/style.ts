import styled, { css }  from "styled-components"

interface IInputStyledProps {
    size: string
}


const Container = styled.div`

    text-align: left;
    padding-top: 20px;

    label {
        font-size: 14px;
        font-weight: 500;
        line-height: 25px;

        span {
            color: #c20707;
        }
    }

    
`

const InputContainer = styled.input<IInputStyledProps>`

    width: 100%;
    /* max-width: 315px; */
    height: 48px;

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

    ${({ size }) => {

        switch(size) {

            case "inputSize100%":

                return css`
                    height: 48px;
                    width: 100%;
                `

            case "inputSizeSecondary":

                return css`
                    height: 48px;
                    width: 144px;
                `


            default:
                return false
        }
    }}
`

export { Container, InputContainer }
