import logo from "../../assets/Motors shop.svg"
import menu from "../../assets/bars.svg"
import close from "../../assets/xmark.svg"
import { Button } from "../Button"
import { Container } from "./style"
import { useState, useContext, useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom";

import { UserContext } from "../../context";
import { Profile } from "../Profile"

import { User01 } from "../../Mocks/User"
import { User02 } from "../../Mocks/User"
import { Api } from "../../services/api"


const HeaderLogin = ({ name }: any) => {

    let { userId } = useParams();

    const { isLoggedin } = useContext(UserContext);

    const [ menuOpen, setMenuOpen ] = useState<boolean>(false)

    const navigate = useNavigate()

    function handleNavigateLogin(){
        navigate("/login")
    }       

    return (
        <Container>
            <img src={ logo } alt="Motors shop" title="Motors shop" onClick={() => navigate("/")}/>
            <menu className="menuDefault">
                <nav>
                    <p onClick={() => navigate("/")}>Carros</p>
                    <p onClick={() => navigate("/")}>Motos</p>
                    <p onClick={() => navigate("/")}>Leilão</p>
                </nav>
                <hr />
                <div>
                    {!isLoggedin && <p onClick={() => handleNavigateLogin()}>Fazer Login</p>}                    
                    {!isLoggedin ?                     
                    <Button size="buttonSizeHeader" color="buttonColorWhiteHeader" type="button" onClick={() => navigate("/register")}>Cadastrar</Button>
                    :
                    <Profile name={name} img={User02.profilePicture}/>
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
                        <p onClick={() => navigate("/")}>Carros</p>
                        <p onClick={() => navigate("/")}>Motos</p>
                        <p onClick={() => navigate("/")}>Leilão</p>
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
