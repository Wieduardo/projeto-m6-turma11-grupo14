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
                    products.map((p: any) => <Product product={ p } key={ p.id } />)
                }
            </menu>
        </Container>
    )
}

export { ListProducts }
