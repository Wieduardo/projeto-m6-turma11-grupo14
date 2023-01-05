import { MouseEventHandler } from "react"
import { Container } from "./style"


interface IButtonProps {
    className?: any
    style?: any
    children: React.ReactNode
    onClick?: MouseEventHandler
    disabled?: boolean | undefined
    type?: "button" | "submit" | "reset" | undefined
    size: "buttonSizeLogin" | "buttonSizeHeader" | "buttonSizeBanner" | "buttonSizeFooter" | "buttonSizeForm" | "buttonSizeFormAddProductCancel" | "buttonSizeFormAddProduct" | "buttonColorBlueBy" | "btnCreateAdUserProfile" | "btnEditProductDetails" | "btnProductDetails"  | "buttonSizeCardSeller" | "buttonSizeSignUp" | "buttonSizeSuccessModal" | "buttonSizeModaProfileMedium" | "buttonSizeModalEditProfileSmall"
    color: "buttonColorBlueLogin" | "buttonColorWhiteHeader" | "buttonColorGrayFooter" | "buttonColorBlueBanner" | "buttonColorGrayCancelForm" | "buttonColorBlueCreateAd" | "buttonColorBlueBy" | "btnCreateAdUserProfile" | "btnEditProductDetails" | "btnProductDetailsBlack" | "buttonColorBlackCardSeller" | "buttonColorWhiteSignUp" | "buttonColorGrayModalEditProfile"
}

const Button = ({ children, size, color, disabled, onClick, type, style, className }: IButtonProps) => {

    return (
        <Container size={ size } color={ color } disabled={ disabled } onClick={ onClick } type={ type } style={ style } className={ className }>
            { children }
        </Container>
    )
}

export { Button }
