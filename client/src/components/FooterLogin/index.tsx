import logo from "../../assets/Motors shop footer.svg"
import { Button } from "../Button"
import { Container } from "./style"


const FooterLogin = () => {

    return (
        <Container>
            <img src={ logo } alt="Motors shop" title="Motors shop" />

            <p>© 2022 -  Todos os direitos reservados.</p>

            <Button size="buttonSizeFooter" color="buttonColorGrayFooter" type="button">^</Button>
        </Container>
    )
}

export { FooterLogin }
