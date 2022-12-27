import { FieldValues, UseFormRegister } from "react-hook-form"
import { Container, TextAreaContainer } from "./styles"

export interface InputProps {
    name: string
    placeholder?: string
    register: UseFormRegister<FieldValues>
    label?: string
    error?: any
    required?: boolean | undefined
    onChange?: any
    size?: "textAreaCommentSize"
}
const TextArea = ({ name, register, error, label, placeholder, required, onChange, size}: InputProps) => {
    return (
        <Container>
            <label>{ label } { !!error && <span> - { error }</span> }</label>

            <TextAreaContainer  { ...register(name) } placeholder={ placeholder } required={ required } onChange={ onChange } size={size}/>
        </Container>
    )
}

export { TextArea };