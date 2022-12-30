import {
    SecondaryContent,
    ImageSection,
    Photo,
 } from "./styles";

const AllVehiclePhotos = ({image}:any) => {
    return (
            <SecondaryContent>
                <h3>Fotos</h3>
                <ImageSection>
                    <Photo src={image}/>
                    <Photo src={image}/>
                    <Photo src={image}/>
                    <Photo src={image}/>
                    <Photo src={image}/>
                    <Photo src={image}/>
                </ImageSection>
            </SecondaryContent>
    )
}


export { AllVehiclePhotos };