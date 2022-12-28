
interface IProfile {
    img: string,
    name: string,
}

import {
 Container,
 ProfilePicture,
 ProfileName
} from './styles';

export function Profile({img, name}:IProfile){
    return(
        <Container>
            <ProfilePicture src={img}/>
            <ProfileName>{name}</ProfileName>
        </Container>
    );
}