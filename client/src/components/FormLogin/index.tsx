import { useForm } from "react-hook-form"
import { Button } from "../Button"
import { Input } from "../Input"
import { Container } from "./style"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from "../../context"
import { Api } from "../../services/api"

const FormLogin = () => {

    const { handleLogin } = useContext(UserContext);

    const [ showOutlineShow, setShowOutlineShow ] = useState<boolean>(true)

    const [ typeInput, setTypeInput ] = useState<boolean>(false)

    const [ load, setLoad ] = useState<boolean>(false)

    const navigate = useNavigate();

    const schema = yup.object().shape({
        email: yup.string().required("Email obrigatório"),
        password: yup.string().required("Senha obrigatória")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data: any) => {
        Api.post(`/api/users/login`, data)
        .then((res)=> {

            sessionStorage.setItem("token", res.data.token)

            navigate(`/${res.data.token}/userHome`)
        })
        .then((_)=> handleLogin())
        .catch((res)=> console.log(res.data))
    }

    return (
        <Container onSubmit={ handleSubmit(onSubmitFunction) }>
            <h2>Login</h2>

            <Input
            label="Usuário"
            name="email"
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
                { ...register("password") }
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
                        
                        <AiOutlineEyeInvisible className="biShow" onClick={ () => {
                        
                            setTypeInput(true)
                            
                            setShowOutlineShow(false)

                        } } />
                    
                        ) : (
                    
                        <AiOutlineEye className="biShow" onClick={ () => {

                            setTypeInput(false)

                            setShowOutlineShow(true)

                        } } />
                    )
                }
            </div>

            <h3>Esqueci minha senha</h3>

            <Button size="buttonSizeLogin" color="buttonColorBlueLogin" type="submit" disabled={ load }>{
                
                load ? "Entrando..." : "Entrar"
                
            }</Button>
            <p>Ainda não possui conta?</p>
            <Button size="buttonSizeLogin" color="buttonColorWhiteHeader" type="button" onClick={() => navigate("/register")}>Cadastrar</Button>
        </Container>
    )
}

export { FormLogin }
