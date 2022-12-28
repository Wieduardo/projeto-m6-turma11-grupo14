import logo from "../../assets/Motors shop.svg"
import menu from "../../assets/bars.svg"
import close from "../../assets/xmark.svg"
import { Button } from "../Button"
import { Container } from "./style"
import { useState, useContext } from "react"

import { useNavigate, useParams } from "react-router-dom";

import { UserContext } from "../../context/user";
import { Profile } from "../Profile"

import { User01 } from "../../Mocks/User"
import { User02 } from "../../Mocks/User"


const HeaderLogin = () => {

    let { userId } = useParams();

    const { isLoggedin } = useContext(UserContext);

    const [ menuOpen, setMenuOpen ] = useState<boolean>(false)

    const navigate = useNavigate()

    function handleNavigateLogin(){
        navigate("/login")
    }

    return (
        <Container>
            <img src={ logo } alt="Motors shop" title="Motors shop" />
            <menu className="menuDefault">
                <nav>
                    <p>Carros</p>
                    <p>Motos</p>
                    <p>Leilão</p>
                </nav>
                <hr />
                <div>
                    {!isLoggedin && <p onClick={() => handleNavigateLogin()}>Fazer Login</p>}                    
                    {!isLoggedin ?                     
                    <Button size="buttonSizeHeader" color="buttonColorWhiteHeader" type="button" >Cadastrar</Button>
                    :
                    <Profile name={userId === User01.id ? User01.name : User02.name} img={userId === User01.id ? User01.profilePicture : User02.profilePicture}/>
                    }
                </div>
            </menu>

            <menu className="menuIcon">
                <img src={ menuOpen ? close : menu } alt="menu"  onClick={ () => {

                    setMenuOpen(true)

                    if(menuOpen) {

                        setMenuOpen(false)
                    }

                } } />

                {
                    menuOpen && 
                    <nav>
                        <p>Carros</p>
                        <p>Motos</p>
                        <p>Leilão</p>
                        <hr />
                        <div>
                            {!isLoggedin && <p onClick={() => handleNavigateLogin()}>Fazer Login</p>}
                            {!isLoggedin ?                     
                            <Button size="buttonSizeHeader" color="buttonColorWhiteHeader" type="button" >Cadastrar</Button>
                            :
                            <Profile name={userId === User01.id ? User01.name : User02.name} img={userId === User01.id ? User01.profilePicture : User02.profilePicture}/>
                            }
                        </div>
                    </nav>
                }
            </menu>
        </Container>
    )
}

export { HeaderLogin }
