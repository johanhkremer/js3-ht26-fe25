export const productName = (products) => {
    return products.map(product => product.name)
}

export const inStockProducts = (products) => {
    return products.filter(product => product.stock > 0)
}