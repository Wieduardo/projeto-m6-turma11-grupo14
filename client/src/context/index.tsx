import React, { createContext, useState } from "react";


interface UserContextProps {
    isLoggedin: boolean;
    handleLogin: () => void;
    formAdProdIsOpen: boolean;
    handleOpenModalAdProd:  () => void;
}

export const UserContext = createContext({} as UserContextProps);


function UserProvider({ children }:any) {

    const [isLoggedin, setIsLoggedin] = useState(false);  

    const [formAdProdIsOpen, setFormAdProdIsOpen] = useState(false);  


    function handleLogin(){
        setIsLoggedin(!isLoggedin);
    }

    function handleOpenModalAdProd(){
      setFormAdProdIsOpen(!formAdProdIsOpen);
    }
  
    return (
      <UserContext.Provider
        value={{
            isLoggedin,
            handleLogin,
            formAdProdIsOpen,
            handleOpenModalAdProd,
          
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
  
  export default UserProvider;
  