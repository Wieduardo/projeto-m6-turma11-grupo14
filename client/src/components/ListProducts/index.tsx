import { IProductProps, Product } from "../Product"
import { Container } from "./style"

const ListProducts = (listName: string, products: any) => {

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
