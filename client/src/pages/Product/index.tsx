import { HeaderLogin } from "../../components/HeaderLogin";
import { VehiclePhotos } from "../../components/VehiclePhotos";
import { ProductDetails } from "../../components/ProductDetails";
import { ProductDescription } from "../../components/ProductDescription";
import { AllVehiclePhotos } from "../../components/AllVehiclePhotos";
import { useEffect, useState } from "react";
import { CommentList } from "../../components/CommentList";
import { AddComment } from "../../components/AddComment";


const ProductPage = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
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
            <VehiclePhotos/>                
            <ProductDetails/> 
            <ProductDescription/>
            {windowSize.innerWidth < 741 && <AllVehiclePhotos/>}
            <CommentList/>
            <AddComment/>
        </>
    )
}

export { ProductPage };