import { useEffect, useState } from "react"
import { Banner } from "../../components/Banner"
import { FooterLogin } from "../../components/FooterLogin"
import { HeaderLogin } from "../../components/HeaderLogin"
import { ListCardAuction } from "../../components/ListCardsAuction"
import { ListProducts } from "../../components/ListProducts"
import { IProductProps } from "../../components/Product"
import { Api } from "../../services/api"
import { Container } from "./style"

const Home = () => {

    const [ products, setProducts ] = useState<IProductProps[]>([])

    const [ auctions, setAuctions ] = useState<IProductProps[]>([])

    const [ motorcycles, setMotorcycles ] = useState<IProductProps[]>([])

    const [ cars, setCars ] = useState<IProductProps[]>([])


    const fetchUserProducts = () => {
        Api.get(`/api/products`)
        .then((resp) => setProducts(resp.data))
        // .then((_) => filterAuctions(products))
        // .then((_) => filterCars(products))
        // .then((_) => filterMotorcycles(products));
    }

    const filterAuctions = (data:IProductProps[]) => {
        const auctionsList = data.filter((prod)=>{
            return prod.ad_type === "auction"
        })

        setAuctions(auctionsList)
    }

    const filterCars = (data:IProductProps[]) => {
        const carList = data.filter((car) => {
            return car.vehicle_type === "car"
        })
        setCars(carList);
    }

    const filterMotorcycles = (data:IProductProps[]) => {
        const motorcyclesList = data.filter((motorcycle) => {
            return motorcycle.vehicle_type === "motorcycle"
        })
        setMotorcycles(motorcyclesList);
    }

    useEffect(() => {
        fetchUserProducts();
    },[])


    return (
        <Container>
            <HeaderLogin />
            <Banner />
            <ListCardAuction
            auctions={ products }
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
