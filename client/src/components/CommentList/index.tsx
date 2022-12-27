import { Comment } from "../Comment";
import {
    Container,
    PrincipalContent,
    Title,
    List
}from "./styles";

const CommentList = () => {
    return (
        <Container>
            <PrincipalContent>
                <Title>Comentários</Title>
                <List>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </List>
            </PrincipalContent>
        </Container>

    )
}

export { CommentList };