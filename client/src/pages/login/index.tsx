import { FooterLogin } from "../../components/FooterLogin"
import { FormLogin } from "../../components/FormLogin"
import { HeaderLogin } from "../../components/HeaderLogin"
import { Container } from "./style"


const Login = () => {

    return (
        <Container>
            <HeaderLogin />

            <div>
                <FormLogin />
            </div>

            <FooterLogin />
        </Container>
    )
}

export { Login }
