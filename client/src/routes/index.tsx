import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";

export const ScreenRoutes = () => {
    return(
        <Routes>
            <Route index element={<Home/>}/>            {/*Rota de home*/}
            <Route path="/login" element={<Login />}/>  {/*Rota de login*/}
            <Route path="/register" />                  {/*Rota de registro de usuário*/}
            <Route path="/product/:productId" />        {/*Rota de produto*/}
            <Route path="/:userId" />                   {/*Rota home usuário logado*/}
            <Route path="/:userId/createAdd" />         {/*Rota de criação de anúncio com usuário logado*/}
            <Route path="/:userId" />                   {/*Rota perfil do usuário*/}
        </Routes>
    )
}

//Os comentários nesse arquivo servem somente de guia durante o desenvolvimento do projeto
//Serão removidos ao final do mesmo