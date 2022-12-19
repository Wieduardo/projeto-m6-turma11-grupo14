import { useState } from 'react';

import ReactModal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

import { UploadWidget } from '../UploadWidget';

import { 
    Container,
    ModalHeader,
    ModalTitle,
    ModalCloseButton,
    ModalAddTypeTitle,
    ModalAddType,
    AddTypeButton,
    ModalVehicleInfos,
    SectionTitle,
    VehicleTitle,
    TitleInput,
    VehicleDetailsSection,
    Details,
    VehicleDetail,
    VehicleDescriptionSection,
    DescriptionTitle,
    TextAreaSection,
    TextArea,
    VehicleImageSection,
    CapeImageTitle,
    InputImageFileCape
 } from "./styles";

const FormAddProduct = () => {

    const [isOpen, setIsOpen] = useState(true);

    const schema = yup.object().shape({

        username: yup.string().required("Usuário obrigatório"),
        password: yup.string().required("Senha obrigatória")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })


    return(
        <Container>
            <ReactModal
                isOpen={isOpen}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      },
                      content: {
                        maxWidth: "520px"
                      }
                }}
            >
                <ModalHeader>
                    <ModalTitle>Criar Anúncio</ModalTitle>
                    <ModalCloseButton>
                        <AiOutlineClose size={17} color="#ADB5BD"/>
                    </ModalCloseButton>
                </ModalHeader>
                <ModalAddTypeTitle>Tipo do anúncio</ModalAddTypeTitle>
                <ModalAddType>
                    <AddTypeButton size="buttonSizeForm" color="buttonColorWhiteHeader" type="button">Venda</AddTypeButton>
                    <AddTypeButton size="buttonSizeForm" color="buttonColorWhiteHeader" type="button">Leilão</AddTypeButton>
                </ModalAddType>
                <ModalVehicleInfos>
                    <SectionTitle>
                        Informações do Veículo
                    </SectionTitle>
                    <VehicleTitle>
                        Título
                    </VehicleTitle>
                    <TitleInput name="title" register={ register } placeholder="Digitar título" required={true}/>
                    <VehicleDetailsSection>
                        <Details>
                            <VehicleDetail>
                                Ano
                            </VehicleDetail>
                            <TitleInput name="title" register={ register } placeholder="Digitar título" required={true}/>
                        </Details>
                        <Details>
                            <VehicleDetail>
                                Quilometragem
                            </VehicleDetail>
                            <TitleInput name="km" register={ register } placeholder="0" required={true}/>
                        </Details>
                        <Details>
                            <VehicleDetail>
                                Preço
                            </VehicleDetail>
                            <TitleInput name="price" register={ register } placeholder="Digitar preço" required={true}/>
                        </Details>
                    </VehicleDetailsSection>
                    <VehicleDescriptionSection>
                        <DescriptionTitle>
                            Descrição
                        </DescriptionTitle>
                        <TextAreaSection>
                            <TextArea placeholder='Digitar descrição'/>
                        </TextAreaSection>
                    </VehicleDescriptionSection>
                    <ModalAddTypeTitle>Tipo do veículo</ModalAddTypeTitle>
                    <ModalAddType>
                        <AddTypeButton size="buttonSizeForm" color="buttonColorWhiteHeader" type="button">Carro</AddTypeButton>
                        <AddTypeButton size="buttonSizeForm" color="buttonColorWhiteHeader" type="button">Moto</AddTypeButton>
                    </ModalAddType>
                </ModalVehicleInfos>
                <VehicleImageSection>
                    <CapeImageTitle>
                        Imagem da Capa
                    </CapeImageTitle>
                    <UploadWidget/>
                </VehicleImageSection>

            </ReactModal>
        </Container>
    );
}

export { FormAddProduct };