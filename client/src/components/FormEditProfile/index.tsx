import { Container } from "./style"
import { Input } from "../Input"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "../Button"
import { TextArea } from "../TextArea"

const FormEditProfile = () => {

    const [ user, setUser ] = useState<any>()

    const schema = yup.object().shape({
        name: yup.string().required("Name obrigatório"),
        email: yup.string().required("Email obrigatória").email("Email inválido"),
        password: yup.string().required("Senha obrigatória").min(8, "Minimum 8 caracters").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Password must contain uppercase and lowercase letters, numbers and special characters"),
        cpf: yup.string().required("CPF obrigatória"),
        cellphone: yup.string().required("Celular obrigatória"),
        birthdate: yup.string().required("Data obrigatória"),
        description: yup.string().required("Descrição obrigatória"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data: any) => {
      console.log(data)
    }

    return (
        <Container>
            <header>
                <h2>Editar perfil</h2>

                <img alt="x" />
            </header>

            <form onSubmit={ handleSubmit(onSubmitFunction) }>
                <h3>Infomações pessoais</h3>

                <div>
                    <Input
                    label="Nome"
                    name="name"
                    register={ register }
                    placeholder="Ex: Rodrigo Silva"
                    autoComplete="off"
                    type="text"
                    error={ errors.name?.message }
                    required={ true }
                    size="inputModalEditProfile"
                    value={ user?.name }
                    />
                    <Input
                    label="Email"
                    name="email"
                    register={ register }
                    placeholder="Ex: johndoe@org.com"
                    autoComplete="off"
                    type="email"
                    error={ errors.email?.message }
                    required={ true }
                    size="inputModalEditProfile"
                    value={ user?.email }
                    />
                    <Input
                    label="CPF"
                    name="cpf"
                    register={ register }
                    placeholder="000.000.000-00"
                    autoComplete="off"
                    type="number"
                    error={ errors.cpf?.message }
                    required={ true }
                    size="inputModalEditProfile"
                    value={ user?.cpf }
                    />
                    <Input
                    label="Celular"
                    name="cellphone"
                    register={ register }
                    placeholder="(DDD) 9 9999-9999"
                    autoComplete="off"
                    type="text"
                    error={ errors.cellphone?.message }
                    required={ true }
                    size="inputModalEditProfile"
                    value={ user?.cellphone }
                    />
                    <Input
                    label="Data de nascimento"
                    name="birthdate"
                    register={ register }
                    placeholder="00/00/0000"
                    autoComplete="off"
                    type="text"
                    error={ errors.birthdate?.message }
                    required={ true }
                    size="inputModalEditProfile"
                    value={ user?.birthdate }
                    />
                    <TextArea
                    label="Descrição"
                    name="description"
                    register={ register }
                    placeholder="Descrição"
                    error={ errors.birthdate?.message }
                    required={ true }
                    size="textAreaCommentSize"
                    value={ user?.birthdate }
                    />
                </div>

                <div className="divButtons">
                    <Button color="buttonColorGrayModalEditProfile" size="buttonSizeModalEditProfileSmall" type="button">Cancelar</Button>
                    <Button color="buttonColorBlueLogin" size="buttonSizeModaProfileMedium" type="button">Salvar alteração</Button>
                </div>
            </form>
        </Container>
    )
}

export { FormEditProfile }
