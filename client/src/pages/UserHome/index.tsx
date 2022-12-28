import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Api } from "../../services/api";

import {
    Container
} from "./styles";
import { HeaderLogin } from "../../components/HeaderLogin";

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
        </Container>
    )
}

export { UserHome }
