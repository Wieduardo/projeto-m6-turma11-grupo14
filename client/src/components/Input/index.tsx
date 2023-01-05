import { FieldValues, UseFormRegister } from "react-hook-form"
import { Container, InputContainer } from "./style"

export interface InputProps {
    type?: string
    name: string
    autoComplete?: string
    placeholder?: string
    register: UseFormRegister<FieldValues>
    label?: string
    error?: any
    required?: boolean | undefined
    onChange?: any
    size?: "inputSize100%" | "inputSizeSecondary" | "inputCommentSize" | "inputSignUp" | "inputSignIn"
    defaultValue?: any
    className?: any
}

const Input = ({ type, name, register, autoComplete, error, label, placeholder, required, onChange, size, defaultValue,className }: InputProps) => {

    return (
        <Container>
            <label>{ label } { !!error && <span> - { error }</span> }</label>

            <InputContainer defaultValue={defaultValue} type={ type } { ...register(name) } autoComplete={ autoComplete } placeholder={ placeholder } required={ required } onChange={ onChange } size={ size } className={ className } />
        </Container>
    )
}

export { Input }
