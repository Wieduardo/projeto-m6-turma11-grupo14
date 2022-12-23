import { MouseEventHandler } from "react"
import { Container } from "./style"


interface IButtonProps {
    children: React.ReactNode
    onClick?: MouseEventHandler
    disabled?: boolean | undefined
    type?: "button" | "submit" | "reset" | undefined
    size: "buttonSizeLogin" | "buttonSizeHeader" | "buttonSizeBanner" | "buttonSizeFooter" | "buttonSizeForm" | "buttonSizeFormAddProductCancel" | "buttonSizeFormAddProduct"
    color: "buttonColorBlueLogin" | "buttonColorWhiteHeader" | "buttonColorGrayFooter" | "buttonColorBlueBanner" | "buttonColorGrayCancelForm" | "buttonColorBlueCreateAd"
}

const Button = ({ children, size, color, disabled, onClick, type }: IButtonProps) => {

    return (
        <Container size={ size } color={ color } disabled={ disabled } onClick={ onClick } type={ type }>
            { children }
        </Container>
    )
}

export { Button }
