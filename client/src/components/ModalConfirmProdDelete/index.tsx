import { useContext } from 'react';

import ReactModal from 'react-modal';


import { 
    Container,
 } from "./styles";
 
import { UserContext } from '../../context';

const FormEditDeleteProduct = () => {


    const { formEditDeleteProdIsOpen, handleOpenEditDeleteProdModal } = useContext(UserContext);


    const functionCloseModal = () => {
        handleOpenEditDeleteProdModal()
    }


    return(
        <Container> 
            <ReactModal
                isOpen={formEditDeleteProdIsOpen}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      },
                      content: {
                        maxWidth: "520px"
                      }
                }}
            >
                
                <p>Produto deletado con sucesso.</p>
            </ReactModal>
        </Container>
    );
}

export { FormEditDeleteProduct };