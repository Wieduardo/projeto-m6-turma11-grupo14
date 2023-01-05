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
            color: var(--alert1);
        }
    }

    
`

const InputContainer = styled.input<IInputStyledProps>`

    width: 100%;
    height: 48px;

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

            case "inputCommentSize":

                return css`
                    height: 128px;
                    width: 284px;
                `
            case "inputSignUp":
                return css`
                    max-width: 152px;
                    height: 48px;
                `
                
            case "inputSignIn":
                return css`
                    max-width: 315px;
                    height: 48px;
                `
            
            case "inputModalEditProfile":
                return css`
                    max-width: 466px;
                    height: 48px;
                `

            default:
                return false
        }
    }}
`

export { Container, InputContainer }
