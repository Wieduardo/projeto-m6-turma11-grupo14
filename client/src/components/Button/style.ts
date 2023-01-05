import styled, { css } from "styled-components"


interface IButtonStyledProps {
    size: string
    color: string
}

const Container = styled.button<IButtonStyledProps>`

    width: 100%;
    
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;

    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: .5s;

    ${({ size }) => {

        switch(size) {

            case "buttonSizeLogin":

                return css`
                    height: 48px;
                    max-width: 315px;
                `

            case "buttonSizeHeader":

                return css`
                    height: 48px;
                    max-width: 133px;
                `

            case "buttonSizeFooter":

                return css`
                    height: 50px;
                    max-width: 53px;
                `

            case "buttonSizeBanner":

                return css`
                    width: 182.51px;
                    height: 48px;
                `
            case "buttonSizeForm":

                return css`
                    width: 228px;
                    height: 48px;
                `

            case "buttonSizeFormAddProductCancel":

                return css`
                    width: 126px;
                    height: 48px;
                    margin-right: 10px;
                `

            case "buttonSizeFormAddProduct":

                return css`
                    width: 193px;
                    height: 48px;
                `

            case "buttonColorBlueBy":

                return css`
                    width: 100px;
                    height: 38px;
                `

            case "btnCreateAdUserProfile":

                return css`
                    width: 160px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    font-size: 14px;
                    margin-top: 16px;
                `

            case "btnEditProduct":

                return css`
                    width: 132px;
                    height: 38px;
                    font-size: 14px;
                `
            case "btnProductDetails":

                return css`
                    width: 132px;
                    height: 38px;
                    font-size: 14px;
                    margin-left: 25px;
                `
              
            case "buttonSizeCardSeller":
                return css`
                    height: 48px;
                    max-width: 206px;
                `
                
            case "buttonSizeSignUp":
                return css`
                    height: 48px;
                    max-width: 152px;
                `

             case "buttonSizeSuccessModal":
                return css`
                    height: 38px;
                    max-width: 132px;
                `

            default:
                return false
        }
    }}

    ${({ color }) => {

        switch(color) {

            case "buttonColorBlueLogin":

                return css`
                    background-color: var(--brand1);
                    border: 1.5px solid var(--brand1);

                    color: var(--whiteFixed);
                    padding: 12px 28px;

                    :hover {
                        background-color: var(--brand2);
                        border-color: var(--brand2);
                    }
                `

            case "buttonColorWhiteHeader":

                return css`
                    background-color: var(--grey10);
                    border: 1.5px solid var(--grey4);

                    color: var(--grey0);
                    padding: 12px 28px;

                    :hover {
                        border-color: rgba(0, 0, 0, 0.15);
                        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
                        color: rgba(0, 0, 0, 0.65);
                        transform: translateY(-1px);
                    }
                `
                        
            case "buttonColorGrayFooter":

                return css`
                    background-color: var(--grey1);
                    
                    color: var(--whiteFixed);
                    font-weight: 900;
                `
            
            case "buttonColorBlueBanner":

                return css`
                    border: 1.5px solid var(--grey10);
                    border-radius: 4px;

                    background-color: transparent;
                    padding: 12px 28px;

                    color: var(--grey10);
                    
                    :hover {
                        background-color: var(--grey10);
                        color: var(--brand2);
                    }
                `

            case "buttonColorGrayCancelForm":

                return css`
                    border: 1.5px solid var(--grey6);
                    border-radius: 4px;

                    background: var(--grey6);
                    padding: 12px 28px;

                    color: var(--grey2);
                    
                    :hover {
                        background-color: var(--grey10);
                    }
                `

            case "buttonColorBlueCreateAd":

                return css`
                    border: 1.5px solid var(--grey6);
                    border-radius: 4px;

                    background: var(--brand3);
                    padding: 12px 28px;

                    color: var(--brand4);
                    
                `

            case "buttonColorBlueBy":

                return css`
                    border: 1.5px solid var(--brand1);
                    border-radius: 4px;

                    background: var(--brand1);
                    padding: 12px 28px;

                    color: var(--whiteFixed);
                    
                `
            
            case "btnCreateAdUserProfile":

                return css`
                    border: 1.5px solid var(--brand1);
                    border-radius: 4px;

                    background: transparent;
                    padding: 12px 28px;
                    

                    color: var(--brand1);
                    
                `
            
            case "btnEditProductDetails":

                return css`
                    border: 1.5px solid var(--grey10);
                    border-radius: 4px;

                    background: transparent;
                    padding: 12px 20px;
                    

                    color: var(--grey10);
                    
                `
            
            case "btnProductDetailsBlack":

                return css`
                    border: 1.5px solid var(--grey0);
                    border-radius: 4px;

                    background: transparent;
                    padding: 12px 20px;
                    margin-top: 10px;
                    

                    color: var(--grey0);
                    
                `

           case "buttonColorBlackCardSeller":
           
                return css`
                    background: #0B0D0D;
                    border: 1.5px solid #0B0D0D;
                    border-radius: 4px;
                    
                    padding: 12px 28px;
                    font-weight: 600;
                    font-size: 15px;
                    color: #FFF;

                    :hover {
                        border-color: #536060;
                        background: #536060;
                        }
                   `
          
          case "buttonColorWhiteSignUp":
                
                return css`
                    background-color: #FDFDFD;
                    border: 1.5px solid #ADB5BD;
                    color: #0B0D0D;
                    padding: 12px 28px;
                    
                    :hover {
                        border-color: #4529E6;
                        background-color: #4529E6;
                        color: #FDFDFD;
                      }
                `
            
            default:
                return false
        }
    }}
`

export { Container }
