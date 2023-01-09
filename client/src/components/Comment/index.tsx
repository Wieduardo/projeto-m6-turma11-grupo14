import EllipseSvg from "../../assets/Ellipse.svg";

import {
    Container,
    Infos,
    Image,
    UserName,
    Date,
    CommentText,
}from "./styles";

interface IComment {
    comment: any
}

const Comment = ({ comment }: IComment) => {
    return (
        <Container>
            <Infos>
                <Image src="https://cdn.pixabay.com/photo/2021/06/07/13/45/user-6318003__340.png" />
                <UserName>Júlia Lima</UserName>
                <img src={EllipseSvg}/>
                <Date>há 3 dias</Date>
            </Infos>
            <CommentText>
                { comment.description }
            </CommentText>
        </Container>

    )
}

export { Comment };