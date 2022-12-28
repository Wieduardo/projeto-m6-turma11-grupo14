import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Api } from "../../services/api";

import {
    Container
} from "./styles";

import { HeaderLogin } from "../../components/HeaderLogin";
import { ListCardAuction } from "../../components/ListCardsAuction";
import { ListProducts } from "../../components/ListProducts";
import { FooterLogin } from "../../components/FooterLogin";
import { IProductProps } from "../../components/Product";

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

    const [userProducts, setUserProducts] = useState<UserProductsProps[]>([]);

    const [ products, setProducts ] = useState<IProductProps[]>([])

    const [ auctions, setAuctions ] = useState<IProductProps[]>([])

    let { userId } = useParams();

    const fetchUserProducts = () => {
        Api.get(`/api/products/user/${userId}`).then((resp) => setUserProducts(resp.data));
    }

    useEffect(() => {
        fetchUserProducts();
    },[])

    return (
        <Container>
            <HeaderLogin/>
            <div className="blueDiv"/>
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

export { UserHome }
