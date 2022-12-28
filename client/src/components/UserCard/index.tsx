import { Button } from '../Button';

import {
 Container,
 ProfilePicture,
 UsernameAndType,
 Username,
 UserType,
 UserDescription,
} from './styles';

export function UserCard(){
    return(
        <Container>
            <ProfilePicture src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrh59UXvIbu9gHbxWmUeHtSz2Oe_rCM1iL-g&usqp=CAU"/>
            <UsernameAndType>
                <Username>Bruno Passos</Username>
                <UserType>Anúnciante</UserType>
            </UsernameAndType>
            <UserDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </UserDescription>
            <Button size='btnCreateAdUserProfile' color='btnCreateAdUserProfile'>Criar anúncio</Button>
        </Container>
    );
}