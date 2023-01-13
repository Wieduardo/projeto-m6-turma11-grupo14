import { useParams } from "react-router-dom";
import {  useEffect, useState } from "react";
import { Api } from "../../services/api";

import {
    Container
} from "./styles";

import { HeaderLogin } from "../../components/HeaderLogin";
import { ListCardAuction } from "../../components/ListCardsAuction";
import { ListProducts } from "../../components/ListProducts";
import { FooterLogin } from "../../components/FooterLogin";
import { IProductProps } from "../../components/Product";
import { UserCard } from "../../components/UserCard";

interface UserProductsProps {
	id: string,
	name: string,
	description: string,
	year: number,
	kilometers: number,
	ad_type: string,
	price: string,
	user: string,
	vehicle_type: string,
	images: string	
}

const UserHome = () => {

    const [isLoading, setIsloading] = useState<boolean>(true)

    

    const [userProducts, setUserProducts] = useState<IProductProps[]>([])

    const [ products, setProducts ] = useState<IProductProps[]>([])

    const [ auctions, setAuctions ] = useState<IProductProps[]>([])

    const [user, setUser] = useState<any>()

    let { userId } = useParams();

    const fetchUserProducts = () => {
        Api.get(`/api/products/user/${userId}`).then((resp) => setUserProducts(resp.data));
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
        onLogin()
        fetchUserProducts();
    },[])

    return (

        !isLoading &&    

        <Container>
            <HeaderLogin name={user.name}/>
            <div className="blueDiv"/>
            <section className="userCardSection">
                <UserCard/>
            </section>
            <ListCardAuction
            auctions={ userProducts }
            />
            <ListProducts
            listName="Carros"
            products={ userProducts }
            />
            <ListProducts
            listName="Motos"
            products={ userProducts }
            />
            <FooterLogin />
        </Container>
        
    )
}

export { UserHome }
