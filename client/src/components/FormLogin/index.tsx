import { useForm } from "react-hook-form"
import { Button } from "../Button"
import { Input } from "../Input"
import { Container } from "./style"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from "react"


const FormLogin = () => {

    const [ showOutlineShow, setShowOutlineShow ] = useState<boolean>(true)

    const [ typeInput, setTypeInput ] = useState<boolean>(false)

    const [ load, setLoad ] = useState<boolean>(false)

    const schema = yup.object().shape({

        usuario: yup.string().required("Usuário obrigatório"),
        senha: yup.string().required("Senha obrigatória")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data: object) => console.log(data)

    return (
        <Container onSubmit={ handleSubmit(onSubmitFunction) }>
            <h2>Login</h2>

            <Input
            label="Usuário"
            name="usuario"
            register={ register }
            placeholder="Digitar usuário"
            autoComplete="off"
            type="text"
            error={ errors.usuario?.message }
            required={ true }
            />

            <label>Senha { errors.senha?.message as string }</label>
            <div className="inputPassword">
                <input
                { ...register("senha") }
                placeholder="Digitar senha"
                type={ typeInput ? "text" : "password" }
                required={ true }
                onChange={ (e: any) => {

                    if(e.target.value == '') {

                        setShowOutlineShow(true)

                        setTypeInput(false)
                    }
                } }
                />
                {
                    showOutlineShow ? (
                        
                        <AiOutlineEye className="biShow" onClick={ () => {
                        
                            setTypeInput(true)
                            
                            setShowOutlineShow(false)

                        } } />
                    
                        ) : (
                    
                        <AiOutlineEyeInvisible className="biShow" onClick={ () => {

                            setTypeInput(false)

                            setShowOutlineShow(true)

                        } } />
                    )
                }
            </div>

            <h3>Esqueci minha senha</h3>

            <Button size="large" color="blue" type="submit" disabled={ load }>{
                
                load ? "Entrando..." : "Entrar"
                
            }</Button>
            <p>Ainda não possui conta?</p>
            <Button size="large" color="white" type="button">Cadastrar</Button>
        </Container>
    )
}

export { FormLogin }
