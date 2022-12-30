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

 const ProductDetails = ({product}:any) => {
    return(
        <>
            <Container>
                <PrincipalContent>
                    <Description>
                        {product.name}
                    </Description>
                    <Details>
                        <MoreInfos>
                            <CarInfo>
                            {product.year}
                            </CarInfo>
                            <CarInfo>
                            {product.kilometers} KM
                            </CarInfo>
                        </MoreInfos>
                        <CarPrice>
                            R$ {product.price}
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