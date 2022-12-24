import { Button } from "../Button";
import { 
    Container,
    PrincipalContent,
    Description,
    Details,
    MoreInfos,
    CarInfo,
    CarPrice
 } from "./styles";

 const ProductDetails = () => {
    return(
        <>
            <Container>
                <PrincipalContent>
                    <Description>
                        Mercedes Benz A 200 CGI
                        ADVANCE SEDAN Mercedes
                        Benz A 200
                    </Description>
                    <Details>
                        <MoreInfos>
                            <CarInfo>
                                2013
                            </CarInfo>
                            <CarInfo>
                                0 KM
                            </CarInfo>
                        </MoreInfos>
                        <CarPrice>
                            R$ 00.000,00
                        </CarPrice>
                    </Details>
                    <Button color="buttonColorBlueBy" size="buttonColorBlueBy">
                        Comprar
                    </Button>
                </PrincipalContent>
            </Container>
        </>
    )
 }

 export { ProductDetails };