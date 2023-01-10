interface IProductRequest{
    id: string,
    name: string,
    description: string,
    year: number,
    kilometers: number,
    ad_type: string,
    price: string,
    vehicle_type: string,
    images: string
}

interface IProductPatch{
    id: string,
    prod_id: string,
    name?: string,
    description?: string,
    year?: number,
    kilometers?: number,
    ad_type?: string,
    price?: string,
    vehicle_type?: string,
    images?: string
}


interface IProductId{
    prod_id: string
}

export {IProductRequest, IProductId, IProductPatch}