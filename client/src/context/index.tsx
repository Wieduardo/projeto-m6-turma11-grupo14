import React, { createContext, useState } from "react";


interface UserContextProps {
    isLoggedin: boolean;
    handleLogin: () => void;
    formAdProdIsOpen: boolean;
    handleOpenModalAdProd:  () => void;
    addProduct: boolean;
    handleFormAddProduct: () => void;
    formEditDeleteProdIsOpen: boolean;
    handleOpenEditDeleteProdModal: () => void;
    editDeleteProdId: string;
    handleProdIdToEditDelete: (id:string) => void;
}

export const UserContext = createContext({} as UserContextProps);


function UserProvider({ children }:any) {

    const [isLoggedin, setIsLoggedin] = useState(false); 

    const [addProduct, setAddProduct] = useState(false);  

    const [formAdProdIsOpen, setFormAdProdIsOpen] = useState(false);  

    const [formEditDeleteProdIsOpen, setFormEditDeleteProdIsOpen] = useState(false);  

    const [editDeleteProdId, setEditDeleteProdId] = useState<string>("");


    function handleLogin(){
        setIsLoggedin(!isLoggedin);
    }

    function handleOpenModalAdProd(){
      setFormAdProdIsOpen(!formAdProdIsOpen);
    }

    function handleFormAddProduct(){
      setAddProduct(!addProduct)
    }

    function handleOpenEditDeleteProdModal(){
      setFormEditDeleteProdIsOpen(!formEditDeleteProdIsOpen)
    }

    function handleProdIdToEditDelete(id: string){
      setEditDeleteProdId(id)
    }
  
    return (
      <UserContext.Provider
        value={{
            isLoggedin,
            handleLogin,
            formAdProdIsOpen,
            handleOpenModalAdProd,
            addProduct,
            handleFormAddProduct,
            formEditDeleteProdIsOpen,
            handleOpenEditDeleteProdModal,
            editDeleteProdId,
            handleProdIdToEditDelete
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
  
  export default UserProvider;
  