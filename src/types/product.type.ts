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

export interface Customer {
    name: string,
    email: string,
    phone: string,
    address: string,
    zip: string,
    city: string
}

export interface Order {
    orderNumber: string,
    items: CartItem[],
    total: number,
    customer: Customer
}
