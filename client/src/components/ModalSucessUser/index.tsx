import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Button } from "../Button";

const ModalSucessUser = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <header>
        <p>Sucesso!</p>

        <img src="" />
      </header>

      <div>
        <h5>Seu anúncio foi criado com sucesso!</h5>

        <p>Agora você poderá ver seus negócios crescendo em grande escala</p>

        <Button
          size="buttonSizeSuccessModal"
          color="buttonColorBlueLogin"
          type="button"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Ir para o login
        </Button>
      </div>
    </Container>
  );
};

export { ModalSucessUser };
