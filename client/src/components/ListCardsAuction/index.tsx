import { CardAuction } from "../CardAuction"
import { Container } from "./style"

const ListCardLeilao = (auctions: any) => {

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

export { ListCardLeilao }
