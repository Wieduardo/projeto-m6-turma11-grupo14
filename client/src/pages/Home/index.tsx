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

    const [user, setUser] = useState<any>()

    const [isLoading, setIsloading] = useState<boolean>(true)  

    const fetchUserProducts = () => {
        Api.get(`/api/products`)
        .then((resp) => setProducts(resp.data))
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

    
    const onLogin = () => {     

        const token = sessionStorage.getItem("token")        

        Api.get(`/api/users/user`, {
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        .then((res) => setUser(res.data))
        .then((_) => setIsloading(false))
            
    }

    useEffect(() => {
        fetchUserProducts();
        onLogin();
    },[])



    return (

        !isLoading &&

        <Container>
            <HeaderLogin name={user.name}/>
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
