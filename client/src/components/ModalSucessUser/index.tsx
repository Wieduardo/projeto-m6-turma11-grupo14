import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Button } from "../Button";

interface IFormSignUp {
  setOpenModalSuccess:  React.Dispatch<React.SetStateAction<boolean>>
}

const ModalSucessUser = ({ setOpenModalSuccess }: IFormSignUp) => {
  const navigate = useNavigate();

  return (
    <Container>
      <header>
        <p>Sucesso!</p>

        <img src="" onClick={ () => setOpenModalSuccess(false) } />
      </header>

      <div>
        <h5>Seu anúncio foi criado com sucesso!</h5>

        <p>Agora você poderá ver seus negócios crescendo em grande escala</p>

        <Button
          size="buttonSizeSuccessModal"
          color="buttonColorBlueLogin"
          type="button"
          onClick={() => {
            setOpenModalSuccess(false)
            navigate("/login");
          }}
        >
          Ir para o login
        </Button>
      </div>
    </Container>
  );
};

export { ModalSucessUser };
