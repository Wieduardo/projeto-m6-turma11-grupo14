import { useState } from "react";
import { FooterLogin } from "../../components/FooterLogin";
import { FormRegister } from "../../components/FormRegister";
import { HeaderLogin } from "../../components/HeaderLogin";
import { ModalBackground } from "../../components/ModalBackground";
import { ModalSucessUser } from "../../components/ModalSucessUser";
import { Container } from "./style";

const SignUp = () => {
  const [openModalSuccess, setOpenModalSuccess] = useState<boolean>(false);

  return (
    <>
      {openModalSuccess && (
        <ModalBackground>
          <ModalSucessUser setOpenModalSuccess={setOpenModalSuccess} />
        </ModalBackground>
      )}
      <Container>
        <HeaderLogin />

        <div>
          <FormRegister setOpenModalSuccess={setOpenModalSuccess} />
        </div>

        <FooterLogin />
      </Container>
    </>
  );
};

export { SignUp };
