import { 
    Container,
    PrincipalContent,
    Title,
    Description,
 } from "./styles";

 const ProductDescription = ({product}:any) => {
    return(
        <>
            <Container>
                <PrincipalContent>
                    <Title>Descrição</Title>
                    <Description>
                        {product.description}
                    </Description>
                </PrincipalContent>
            </Container>
        </>
    )
 }

 export { ProductDescription };