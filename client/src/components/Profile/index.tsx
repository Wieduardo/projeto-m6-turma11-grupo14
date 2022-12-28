import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'

interface IProfile {
    img: string,
    name: string,
}

import {
 Container,
 ProfilePicture,
} from './styles';

export function Profile({img, name}:IProfile){
    return(
        <Container>
            <ProfilePicture src={img}/>
            <Menu>
                <MenuButton>
                    {name}
                </MenuButton>
                <MenuList>
                    <MenuItem>Editar Perfil</MenuItem>
                    <MenuItem>Editar endereço</MenuItem>
                    <MenuItem>Meus anúncios</MenuItem>
                    <MenuItem>Sair</MenuItem>
                </MenuList>
                </Menu>
        </Container>
    );
}