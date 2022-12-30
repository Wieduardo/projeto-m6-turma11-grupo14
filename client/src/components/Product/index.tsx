import { useNavigate } from "react-router-dom"
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



const Product = ({product}: any) => {

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
                <img src="" />
                {/* <h6>{ product.user.name }</h6> */}
            </div>

            <div className="divKmYearPrice">
                <div>
                    <p>{ product.kilometers } KM</p>
                    <p>{ product.year }</p>
                </div>

                <span>R$ { product.price }</span>
            </div>
        </Container>
    )
}

export { Product }
