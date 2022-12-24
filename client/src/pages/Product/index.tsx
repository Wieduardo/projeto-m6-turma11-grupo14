import { HeaderLogin } from "../../components/HeaderLogin";
import { VehiclePhotos } from "../../components/VehiclePhotos";
import { ProductDetails } from "../../components/ProductDetails";
import { ProductDescription } from "../../components/ProductDescription";


const ProductPage = () => {
    return(
        <>
            <HeaderLogin/>
            <VehiclePhotos/>                
            <ProductDetails/> 
            <ProductDescription/>
        </>
    )
}

export { ProductPage };