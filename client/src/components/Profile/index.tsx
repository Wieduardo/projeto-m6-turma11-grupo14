import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context';

interface IProfile {
    img: string,
    name: string,
}

import {
 Container,
 ProfilePicture,
} from './styles';

export function Profile({img, name}:IProfile){

    const { handleLogin } = useContext(UserContext);
    const navigate = useNavigate()

    const handleLogout = () => {
        handleLogin();
        navigate("/");
        console.log("tete")
    }

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
                    <MenuItem onClick={() => handleLogout()}>Sair</MenuItem>
                </MenuList>
                </Menu>
        </Container>
    );
}