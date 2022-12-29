import { Container } from "./style"
import rightArrow from "../../assets/Group 29.svg"
import clock from "../../assets/Group 13.svg"

import { UserContext } from "../../context"
import { useContext } from "react"

import { useParams } from "react-router-dom"

import { User01 } from "../../Mocks/User"
import { User02 } from "../../Mocks/User"
import { Button } from "../Button"
import { FormAddProduct } from "../FormAddProduct"

const CardAuction = ({auction}: any) => {

    const { isLoggedin, handleOpenModalAdProd } = useContext(UserContext);

    const { user_id } = useParams();

    const handleOpenEditProductForm = (id:string) => {
        handleOpenModalAdProd()
    }

    return (
        <Container>
            <div className="divCardDescription">
                <img src={ auction.images } alt={ auction.name } />

                <div className="divDescription">
                    <div className="divTimeAuction">
                        <img src={clock} />
                        <time>{ auction.time_limit }</time>
                    </div>

                    <div>
                        <h4>{ auction.name }</h4>

                        <p>{ auction.description }</p>

                        <div className="divUser">
                            <img src={user_id === User01.id ? User01.profilePicture : User02.profilePicture}/>
                            <h6>{ user_id === User01.id ? User01.name : User02.name }</h6>
                        </div>

                        <div className="divYearKMPrice">
                            <div>
                                <p>{ auction.year }</p>
                                <p>{ auction.kilometers } KM</p>
                            </div>

                            <span>R$ { auction.price }</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divRedirectsToAuction">
                {!isLoggedin ? 
                <>                
                    <p>Acessar página do leilão</p>

                    <img src={ rightArrow } alt="right arrow" />
                </>
                :
                <>
                    <Button 
                        type="button"
                        onClick={() => handleOpenEditProductForm(auction.id)}
                        size="btnProductDetails"
                        color="btnEditProductDetails">
                            Editar
                    </Button>
                    <Button 
                        onClick={() => console.log("teste")}
                        size="btnProductDetails" 
                        color="btnEditProductDetails">
                            Ver como
                    </Button>
                </>
                }
            </div>
            <FormAddProduct/>
        </Container>
    )
}

export { CardAuction }
