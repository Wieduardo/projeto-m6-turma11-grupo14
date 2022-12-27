import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup"

import { Button } from "../Button";
import { TextArea } from "../TextArea";

import { 
    Container,
    PrincipalContent,
    UserInfo,
    Image,
    UserName,
    CommentForm,
    TextAreaSection,
    CommentsOptions,
    Option
} from "./styles";

const AddComment = () => {
    const schema = yup.object().shape({
        comment: yup.string().required("Comentário é obrigatório"),        
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    function handleComment(data:any){
        console.log(data)
    }

    return(
        <Container>
            <PrincipalContent>
                <UserInfo>
                    <Image src="https://cdn.pixabay.com/photo/2021/06/07/13/45/user-6318003__340.png"/>
                    <UserName>Samuel Leão</UserName>
                </UserInfo>
                <CommentForm onSubmit={handleSubmit(handleComment)}>
                    <TextAreaSection>
                        <TextArea
                            placeholder='Carro muito confortável, foi uma ótima experiência de compra...'
                            name="comment"
                            register={ register }
                            error={errors.comment?.message }
                            size="textAreaCommentSize"
                        />
                    </TextAreaSection>
                    <Button  size="buttonSizeHeader" color="buttonColorBlueLogin">Comentar</Button>
                </CommentForm>
                <CommentsOptions>
                    <Option>Gostei Muito!</Option>
                    <Option>Incrível</Option>
                    <Option>Recomendarei para os meus amigos!</Option>
                </CommentsOptions>
            </PrincipalContent>

        </Container>
    )
}

export { AddComment };