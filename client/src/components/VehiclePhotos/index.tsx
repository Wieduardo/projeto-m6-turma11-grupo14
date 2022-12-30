import { useEffect, useState } from "react";
import { AllVehiclePhotos } from "../AllVehiclePhotos";
import { IProductProps } from "../Product";

import { 
    Container,
    PrincipalContent,
    PrincipalImage,
 } from "./styles";

const VehiclePhotos = ({product}:any) => {
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
        <Container>
            <PrincipalContent>
                <PrincipalImage src={product.images}/>
            </PrincipalContent>
            {windowSize.innerWidth >= 800 && <AllVehiclePhotos image={product.images}/>}            
        </Container>
    )
}

export { VehiclePhotos };