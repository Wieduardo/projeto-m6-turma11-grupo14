import React, { createContext, useState } from "react";


interface UserContextProps {
    isLoggedin: boolean;
    handleLogin: () => void;
}

export const UserContext = createContext({} as UserContextProps);


function UserProvider({ children }:any) {

    const [isLoggedin, setIsLoggedin] = useState(false);  
    
    function handleLogin(){
        setIsLoggedin(!isLoggedin);
    }
  
    return (
      <UserContext.Provider
        value={{
            isLoggedin,
            handleLogin
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
  
  export default UserProvider;
  