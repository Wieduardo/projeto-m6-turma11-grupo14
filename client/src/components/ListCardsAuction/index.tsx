import { CardAuction } from "../CardAuction"
import { IProductProps } from "../Product"
import { Container } from "./style"

interface IListAuctions {
    auctions: IProductProps[]
}

const ListCardAuction = ({ auctions }: IListAuctions) => {

    return (
        <Container>
            <h2>Leilão</h2>

            <menu>
                {
                    auctions.map((a: any) => <CardAuction auction={ a } key={ a.id } />)
                }
            </menu>
        </Container>
    )
}

export { ListCardAuction }
