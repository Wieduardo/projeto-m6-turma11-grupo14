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
    size?: "inputSize100%" | "inputSizeSecondary"
}

const Input = ({ type, name, register, autoComplete, error, label, placeholder, required, onChange, size }: InputProps) => {

    return (
        <Container>
            <label>{ label } { !!error && <span> - { error }</span> }</label>

            <InputContainer type={ type } { ...register(name) } autoComplete={ autoComplete } placeholder={ placeholder } required={ required } onChange={ onChange } size={ size }/>
        </Container>
    )
}

export { Input }
