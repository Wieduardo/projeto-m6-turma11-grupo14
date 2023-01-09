import { Comment } from "../Comment";
import {
    Container,
    PrincipalContent,
    Title,
    List
}from "./styles";

interface ICommentsList {
    comments: []
}

const CommentList = ({ comments }: ICommentsList) => {
    return (
        <Container>
            <PrincipalContent>
                <Title>Comentários</Title>
                <List>
                    {
                        comments.map(comment => <Comment comment={ comment } />)
                    }
                </List>
            </PrincipalContent>
        </Container>

    )
}

export { CommentList };