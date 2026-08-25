const products = [
    {
        name: "iphone",
        price: 5000,
        stock: 2,
        inStock: true,
        category: "electronics",
    },
    {
        name: "vas",
        price: 300,
        stock: 0,
        inStock: false,
        category: "home",
    },
    {
        name: "monstera",
        price: 250,
        stock: 4,
        inStock: true,
        category: "plants",
    },
    {
        name: "shelf",
        price: 1000,
        stock: 0,
        inStock: false,
        category: "home",
    },
    {
        name: "gps",
        price: 10000,
        stock: 7,
        inStock: true,
        category: "electronics",
    },
]

const formatProduct = (product) => {
    const { name, price, category } = product

    return `${name} - ${price} kr (${category})`;
}

console.log(formatProduct(products[1]))

products.map(product => console.log(formatProduct(product)))