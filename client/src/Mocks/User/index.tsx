import { IProductProps } from "../../components/Product";

export const ProductMock01:IProductProps = {
    name: "Shelby GT500",
    image: "https://conteudo.imguol.com.br/c/entretenimento/03/2020/11/12/ford-mustang-shelby-gt500-eleanor-1605203449031_v2_450x337.jpg",
    description: "Carro utilizado no filme 60 segundos, coisa mais linda.",
    year: 2022,
    kilometers: 30000,
    price: "50000",
    user: {
        name: "Bruno"
    }
}

interface IUserMock {
    id: string,
    username: string;
    password: string;
    name: string;
    profilePicture: string;
}

export const User01:IUserMock = {
    id: "f96ee152-b548-459c-a5ac-3c78e03856c4",
    username: "user01",
    password: "user01",
    name: "user 01",
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrh59UXvIbu9gHbxWmUeHtSz2Oe_rCM1iL-g&usqp=CAU",
}

export const User02:IUserMock = {
    id: "e8bda507-7772-4037-89ae-abb24f702c95",
    username: "user02",
    password: "user02",
    name: "user 02",
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrh59UXvIbu9gHbxWmUeHtSz2Oe_rCM1iL-g&usqp=CAU",
}