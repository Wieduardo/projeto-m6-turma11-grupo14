import { useContext, useState } from 'react';

import ReactModal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

import { Button } from '../Button';
import { Input } from '../Input';
import { TextArea } from "../TextArea"

import { 
    Container,
    ModalHeader,
    ModalTitle,
    ModalCloseButton,
    ModalAddTypeTitle,
    ModalAddType,
    ModalVehicleInfos,
    SectionTitle,
    VehicleTitle,
    VehicleDetailsSection,
    Details,
    VehicleDetail,
    VehicleDescriptionSection,
    DescriptionTitle,
    TextAreaSection,
    VehicleImageSection,
    CapeImageTitle,
    FirstImageGalery,
    FooterFormButtons
 } from "./styles";
import { UserContext } from '../../context';

const FormAddProduct = () => {

    const { formAdProdIsOpen, handleOpenModalAdProd } = useContext(UserContext);

    const [adType, setAdType] = useState("");
    const [vehicleType, setVehicleType] = useState("");

    const schema = yup.object().shape({
        name: yup.string().required("Título é obrigatório"),
        year: yup.number().required("Ano é obrigatório").typeError("Informe um valor númerico"),
        kilometers: yup.number().required("Quilometragem é obrigatória").typeError("Informe um valor númerico"),
        price: yup.string().required("O preço é obrigatório"),
        description: yup.string().required("A descrição é obrigatória"),
        imageCape: yup.string().required("A imagem de capa é obrigatoria."),
        imageGalery: yup.string().required("A imagem é obrigatória"),
        ad_type: yup.string(),
        vehicle_type: yup.string()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data: any) => {
        
        if(!adType){
            return alert("Selecione o tipo de anúncio.");
        }
        
        if(!vehicleType){
            return alert("Selecione o tipo de veículo.");
        }

        data.ad_type =  adType;
        data.vehicle_type = vehicleType;
        console.log(data)
    } 


    return(
        <Container> 
            <ReactModal
                isOpen={formAdProdIsOpen}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      },
                      content: {
                        maxWidth: "520px"
                      }
                }}
            >
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <ModalHeader>
                        <ModalTitle>Criar Anúncio</ModalTitle>
                        <ModalCloseButton onClick={handleOpenModalAdProd}>
                            <AiOutlineClose 
                            size={17} 
                            color="#ADB5BD"
                            />
                        </ModalCloseButton>
                    </ModalHeader>
                    <ModalAddTypeTitle>Tipo do anúncio</ModalAddTypeTitle>
                    <ModalAddType>
                        <Button 
                            type="button" 
                            onClick={() => setAdType("sell")} 
                            size="buttonSizeForm" 
                            color="buttonColorWhiteHeader" >
                                Venda
                        </Button>
                        <Button 
                            type="button" 
                            onClick={() => setAdType("auction")} 
                            size="buttonSizeForm" 
                            color="buttonColorWhiteHeader" >
                                Leilão
                        </Button>
                    </ModalAddType>
                    <ModalVehicleInfos>
                        <SectionTitle>
                            Informações do Veículo
                        </SectionTitle>
                        <VehicleTitle>
                            Título
                        </VehicleTitle>
                        <Input 
                            name="name" 
                            register={ register } 
                            placeholder="Digitar título" 
                            required={true} 
                            size="inputSize100%" 
                            error={errors.titulo?.message }
                        />
                        <VehicleDetailsSection>
                            <Details>
                                <VehicleDetail>
                                    Ano
                                </VehicleDetail>
                                <Input 
                                    name="year" 
                                    register={ register } 
                                    placeholder="Digitar ano" 
                                    required={true} 
                                    size="inputSizeSecondary" 
                                    error={errors.year?.message }
                                />
                            </Details>
                            <Details>
                                <VehicleDetail>
                                    Quilometragem
                                </VehicleDetail>
                                <Input 
                                    name="kilometers" 
                                    register={ register } placeholder="0" 
                                    required={true} 
                                    size="inputSizeSecondary" 
                                    error={errors.kilometers?.message }
                                />
                            </Details>
                            <Details>
                                <VehicleDetail>
                                    Preço
                                </VehicleDetail>
                                <Input 
                                    name="price" 
                                    register={ register } 
                                    placeholder="Digitar preço" 
                                    required={true} 
                                    size="inputSizeSecondary" 
                                    error={errors.price?.message }
                                />
                            </Details>
                        </VehicleDetailsSection>
                        <VehicleDescriptionSection>
                            <DescriptionTitle>
                                Descrição
                            </DescriptionTitle>
                            <TextAreaSection>
                                <TextArea 
                                    placeholder='Digitar descrição' 
                                    name="description" 
                                    register={ register } 
                                    error={errors.description?.message }
                                />
                            </TextAreaSection>
                        </VehicleDescriptionSection>
                        <ModalAddTypeTitle>Tipo do veículo</ModalAddTypeTitle>
                        <ModalAddType>
                            <Button 
                                type="button" 
                                onClick={() => setVehicleType("car")} 
                                size="buttonSizeForm" 
                                color="buttonColorWhiteHeader" >
                                    Carro
                            </Button>
                            <Button 
                                type="button" 
                                onClick={() => setVehicleType("motorcycle")}  
                                size="buttonSizeForm" 
                                color="buttonColorWhiteHeader" >
                                    Moto
                            </Button>
                        </ModalAddType>
                    </ModalVehicleInfos>
                    <VehicleImageSection>
                        <CapeImageTitle>
                            Imagem da Capa
                        </CapeImageTitle>
                        <Input 
                            name="imageCape" 
                            register={ register } 
                            placeholder="Inserir URL da imagem" 
                            required={true} 
                            size="inputSize100%" 
                            error={errors.imageCape?.message }
                        />
                        <FirstImageGalery>
                            1ª imagem da galeria
                        </FirstImageGalery>
                        <Input 
                            name="imageGalery" 
                            register={ register } 
                            placeholder="Inserir URL da imagem" 
                            required={true} 
                            size="inputSize100%" 
                            error={errors.imageGalery?.message }
                        />
                    </VehicleImageSection>
                    <FooterFormButtons>
                        <Button 
                            type="button" 
                            size="buttonSizeFormAddProductCancel" 
                            color="buttonColorGrayCancelForm" 
                            onClick={handleOpenModalAdProd}>
                                Cancelar
                        </Button>
                        <Button 
                            size="buttonSizeFormAddProduct" 
                            color="buttonColorBlueCreateAd">
                                Criar Anúncio
                        </Button>
                    </FooterFormButtons>
                </form>
            </ReactModal>
        </Container>
    );
}

export { FormAddProduct };