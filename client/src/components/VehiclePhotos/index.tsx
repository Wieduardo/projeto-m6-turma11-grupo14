import { 
    Container,
    PrincipalContent,
    PrincipalImage,
    SecondaryContent,
    ImageSection,
    Photo
 } from "./styles";

const VehiclePhotos = () => {
    return(
        <Container>
            <PrincipalContent>
                <PrincipalImage src="https://i0.statig.com.br/bancodeimagens/22/gc/62/22gc622ik51yl5c7abqp7iklk.jpg"/>
            </PrincipalContent>
            <SecondaryContent>
                <h3>Fotos</h3>
                <ImageSection>
                    <Photo src="https://i0.statig.com.br/bancodeimagens/22/gc/62/22gc622ik51yl5c7abqp7iklk.jpg"/>
                    <Photo src="https://i0.statig.com.br/bancodeimagens/22/gc/62/22gc622ik51yl5c7abqp7iklk.jpg"/>
                    <Photo src="https://i0.statig.com.br/bancodeimagens/22/gc/62/22gc622ik51yl5c7abqp7iklk.jpg"/>
                    <Photo src="https://i0.statig.com.br/bancodeimagens/22/gc/62/22gc622ik51yl5c7abqp7iklk.jpg"/>
                    <Photo src="https://i0.statig.com.br/bancodeimagens/22/gc/62/22gc622ik51yl5c7abqp7iklk.jpg"/>
                    <Photo src="https://i0.statig.com.br/bancodeimagens/22/gc/62/22gc622ik51yl5c7abqp7iklk.jpg"/>
                </ImageSection>
            </SecondaryContent>
        </Container>
    )
}

export { VehiclePhotos };