export interface Product {
    _id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: number,
    isNew: boolean,
    oldPrice: string
}

export interface CartItem extends Product {
    quantity: number
}