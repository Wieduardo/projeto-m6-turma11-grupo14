import { useEffect, useState } from "react";
import { AllVehiclePhotos } from "../AllVehiclePhotos";

import { 
    Container,
    PrincipalContent,
    PrincipalImage,
 } from "./styles";

const VehiclePhotos = () => {
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
                <PrincipalImage src="https://i0.statig.com.br/bancodeimagens/22/gc/62/22gc622ik51yl5c7abqp7iklk.jpg"/>
            </PrincipalContent>
            {windowSize.innerWidth >= 800 && <AllVehiclePhotos/>}            
        </Container>
    )
}

export { VehiclePhotos };