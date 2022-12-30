import { useNavigate, useParams } from "react-router-dom"
import { Container } from "./style"

interface IUserProps {
    name: string
}

export interface IProductProps {
    id: string
    name: string
    images: string
    description: string
    year: number
    kilometers: number
    price: string
    user: IUserProps
    vehicle_type: string
    ad_type: string
}


import { User01 } from "../../Mocks/User"
import { User02 } from "../../Mocks/User"
import { useContext } from "react"
import { UserContext } from "../../context"
import { Button } from "../Button"


const Product = ({product}: any) => {

    const { isLoggedin } = useContext(UserContext);

    const { user_id } = useParams();

    const navigate = useNavigate()

    const handleOpenProductDetails = (prod:any) => {
        navigate(`/product/${prod.id}`);
    }

    return (
        <Container onClick={() => handleOpenProductDetails(product)}>
            <img src={ product.images } alt={ product.name } title={ product.name } />

            <h4>{ product.name }</h4>

            <p>{ product.description }</p>

            <div>
                <img src={user_id === User01.id ? User01.profilePicture : User02.profilePicture}/>
                <h6>{ user_id === User01.id ? User01.name : User02.name }</h6>
            </div>

            <div className="divKmYearPrice">
                <div>
                    <p>{ product.kilometers } KM</p>
                    <p>{ product.year }</p>
                </div>

                <span>R$ { product.price }</span>
            </div>
            {isLoggedin && 
            <div>
                <Button 
                    type="button"
                    onClick={() => {}}
                    size="btnProductDetails"
                    color="btnProductDetailsBlack">
                        Editar
                </Button>
                <Button 
                    onClick={() => {}}
                    size="btnProductDetails" 
                    color="btnProductDetailsBlack">
                        Ver como
                </Button>
            </div>
            }
        </Container>
    )
}

export { Product }
