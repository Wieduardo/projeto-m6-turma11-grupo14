import { Container } from "./style"
import { Input } from "../Input"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "../Button"


const FormEditAddress = () => {

    const [ user, setUser ] = useState<any>()

    const schema = yup.object().shape({
        zip_code: yup.number().required("CEP obrigatória"),
        state: yup.string().required("Estado obrigatório"),
        city: yup.string().required("Cidade obrigatório"),
        road: yup.string().required("Rua obrigatória"),
        number: yup.number().required("Número obrigatório"),
        complement: yup.string(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data: any) => {

        const address = {
            zip_code: data.zip_code,
            state: data.state,
            city: data.city,
            road: data.street,
            number: data.number,
            complement: data.complement,
        }

        data.address = address

        console.log(data.address)
      }

    return (
        <Container>
            <header>
                <h2>Editar endereço</h2>

                <img alt="x" />
            </header>

            <form onSubmit={ handleSubmit(onSubmitFunction) }>
                <h3>Infomações de endereço</h3>

                <div>
                    <Input
                    label="CEP"
                    name="zip_code"
                    register={ register }
                    placeholder="00000-000"
                    autoComplete="off"
                    type="number"
                    error={ errors.zip_code?.message }
                    required={ true }
                    size="inputModalEditProfile"
                    value={ user?.address.zip_code }
                    />
                    <div className="divInputs">
                        <Input
                        label="Estado"
                        name="state"
                        register={ register }
                        placeholder="Digitar estado"
                        autoComplete="off"
                        type="text"
                        error={ errors.state?.message }
                        required={ true }
                        size="inputModalEditAddressSmall"
                        className="changeInput"
                        value={ user?.address.state }
                        />
                        <Input
                        label="Cidade"
                        name="city"
                        register={ register }
                        placeholder="Digitar cidade"
                        autoComplete="off"
                        type="text"
                        error={ errors.city?.message }
                        required={ true }
                        size="inputModalEditAddressSmall"
                        className="changeInput"
                        value={ user?.address.city }
                        />
                    </div>
                    <Input
                    label="Rua"
                    name="street"
                    register={ register }
                    placeholder="Digitar rua"
                    autoComplete="off"
                    type="text"
                    error={ errors.street?.message }
                    required={ true }
                    size="inputModalEditProfile"
                    value={ user?.address.street }
                    />
                    <div className="divInputs">
                        <Input
                        className="inputNumber"
                        label="Número"
                        name="number"
                        register={ register }
                        placeholder="Digitar número"
                        autoComplete="off"
                        type="number"
                        error={ errors.number?.message }
                        required={ true }
                        size="inputModalEditAddressSmall"
                        value={ user?.address.number }
                        />
                        <Input
                        className="inputComplement"
                        label="Complemento"
                        name="complement"
                        register={ register }
                        placeholder="Ex: Apart 307"
                        autoComplete="off"
                        type="text"
                        error={ errors.complement?.message }
                        required={ true }
                        size="inputModalEditAddressSmall"
                        value={ user?.address.complement }
                        />
                    </div>
                </div>

                <div className="divButtons">
                    <Button color="buttonColorGrayModalEditProfile" size="buttonSizeModalEditProfileSmall" type="button">Cancelar</Button>
                    <Button color="buttonColorBlueLogin" size="buttonSizeModaProfileMedium" type="button">Salvar alteração</Button>
                </div>
            </form>
        </Container>
    )
}

export { FormEditAddress }
