import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyled from './styles/global'
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/user"
import { ChakraProvider } from "@chakra-ui/react";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <UserProvider>
        <BrowserRouter>
          <GlobalStyled/>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </UserProvider>
  </React.StrictMode>,
)
