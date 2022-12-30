import { HeaderLogin } from "../../components/HeaderLogin";
import { VehiclePhotos } from "../../components/VehiclePhotos";
import { ProductDetails } from "../../components/ProductDetails";
import { ProductDescription } from "../../components/ProductDescription";
import { AllVehiclePhotos } from "../../components/AllVehiclePhotos";
import { useEffect, useState } from "react";
import { CommentList } from "../../components/CommentList";
import { AddComment } from "../../components/AddComment";
import { useParams } from "react-router-dom";
import { Api } from "../../services/api";


const ProductPage = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    const [product, setProduct] = useState<any>();

    const { productId } = useParams();

    const fetchProductData = () => {
        console.log("rodou")
        Api.get(`/api/products/${productId}`)
        .then((resp) => setProduct(resp.data)).then(()=> console.log("finalizou"))
    }


    useEffect(() => {
        fetchProductData()
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener("resize", handleWindowResize);
    
        return () => {
          window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    
    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    return(
        <>
            <HeaderLogin/>
            <VehiclePhotos product={product}/>                
            <ProductDetails product={product}/> 
            <ProductDescription product={product}/>
            {windowSize.innerWidth < 741 && <AllVehiclePhotos/>}
            <CommentList/>
            <AddComment/>
        </>
    )
}

export { ProductPage };