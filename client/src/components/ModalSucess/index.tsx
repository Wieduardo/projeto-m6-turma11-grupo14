import { Container } from "./style"
import close from "../../assets/x.svg"

const ModalSucess = () => {

    return (
        <Container>
            <header>
                <p>Sucesso!</p>

                <img src={ close } />
            </header>

            <div>
                <h5>Seu anúncio foi criado com sucesso!</h5>

                <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
            </div>
        </Container>
    )
}

export { ModalSucess }
