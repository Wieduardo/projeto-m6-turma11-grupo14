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
	isActive: boolean,
    date_joined: Date,
    updated_at: Date,
    products: string,
    comments: string,
    bids: string
}

interface IUserId {
    id: string
}

export {IUser, IUserId ,IUserRequest}