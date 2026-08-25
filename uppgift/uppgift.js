//Uppgifter från lektion 1

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

// Använd spread (...) för att skapa en array med en extra produkt tillagd, utan att ändra
// den ursprungliga products-arrayen. Logga båda arrayerna och visa att originalet är oförändrat.

const newProduct = {
    name: "soffa",
    price: 4000,
    stock: 10,
    inStock: true,
    category: "home",
}

const newProductsList = [...products, newProduct]

console.log("Gamla listan:", products)
console.log("Nya listan med ny produkt:", newProductsList)