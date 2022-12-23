import { useState } from "react"
import { Banner } from "../../components/Banner"
import { FooterLogin } from "../../components/FooterLogin"
import { HeaderLogin } from "../../components/HeaderLogin"
import { ListCardAuction } from "../../components/ListCardsAuction"
import { ListProducts } from "../../components/ListProducts"
import { IProductProps } from "../../components/Product"
import { Container } from "./style"

const Home = () => {

    const [ products, setProducts ] = useState<IProductProps[]>([])

    const [ auctions, setAuctions ] = useState<IProductProps[]>([])

    return (
        <Container>
            <HeaderLogin />
            <Banner />
            <ListCardAuction
            auctions={ auctions }
            />
            <ListProducts
            listName="Carros"
            products={ products }
            />
            <ListProducts
            listName="Motos"
            products={ products }
            />
            <FooterLogin />
        </Container>
    )
}

export { Home }
