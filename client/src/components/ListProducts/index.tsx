import { IProductProps, Product } from "../Product"
import { Container } from "./style"

interface IListProductsProps {
    listName: string
    products: IProductProps[]
}

const ListProducts = ({ listName, products }: IListProductsProps) => {


    return (
        <Container>
            <h2>{ listName }</h2>

            <menu>
                {
                    listName === "Carros" ?
                    products.map((p: IProductProps) => (p.ad_type === "sell" && p.vehicle_type === "car" ) && <Product product={ p } key={ p.id } />)
                    :
                    products.map((p: IProductProps) => (p.ad_type === "sell" && p.vehicle_type === "motorcycle" ) && <Product product={ p } key={ p.id } />)
                }
            </menu>
        </Container>
    )
}

export { ListProducts }
