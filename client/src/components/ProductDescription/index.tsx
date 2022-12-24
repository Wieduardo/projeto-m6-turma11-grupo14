import { 
    Container,
    PrincipalContent,
    Title,
    Description,
 } from "./styles";

 const ProductDescription = () => {
    return(
        <>
            <Container>
                <PrincipalContent>
                    <Title>Descrição</Title>
                    <Description>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make 
                        a type specimen book.
                    </Description>
                </PrincipalContent>
            </Container>
        </>
    )
 }

 export { ProductDescription };