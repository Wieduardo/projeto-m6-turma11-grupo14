interface IUserRequest {
    name: string,
    email: string,
    password: string,
    cellphone: string,
    address: string,
    cpf: string,
    birthdate: string,
    is_seller: boolean
}
interface IUser {
    id: string,
    name: string,
    email: string,
    password: string,
    cellphone: string,
    address: string,
    cpf: string,
    birthdate: string,
    is_seller: boolean,
    date_joined: Date,
    updated_at: Date,
    products: string,
    comments: string,
    bids: string
}

export {IUser, IUserRequest}