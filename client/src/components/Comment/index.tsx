import EllipseSvg from "../../assets/Ellipse.svg";

import {
    Container,
    Infos,
    Image,
    UserName,
    Date,
    CommentText,
}from "./styles";

const Comment = () => {
    return (
        <Container>
            <Infos>
                <Image src="https://cdn.pixabay.com/photo/2021/06/07/13/45/user-6318003__340.png" />
                <UserName>Júlia Lima</UserName>
                <img src={EllipseSvg}/>
                <Date>há 3 dias</Date>
            </Infos>
            <CommentText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book.
            </CommentText>
        </Container>

    )
}

export { Comment };