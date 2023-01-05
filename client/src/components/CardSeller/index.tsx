import { Container } from "./style";
import { Button } from "../Button";

interface IUserCardSeller {
  image: string;
  name: string;
  description: string;
}

const CardSeller = (user: IUserCardSeller) => {
  return (
    <Container>
      <div>
        <img src={user.image} alt={user.name} />
        <h4>{user.name}</h4>
        <p>{user.description}</p>

        <Button
          size="buttonSizeCardSeller"
          color="buttonColorBlackCardSeller"
          type="button"
        >
          Ver todos anuncios
        </Button>
      </div>
    </Container>
  );
};

export { CardSeller };
