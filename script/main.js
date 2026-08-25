//export/import

import products from "./products.js"
import { greetUser } from "./greet.js"
import { productName, inStockProducts } from "./inventory.js"

console.log("Importet greeting:", greetUser("Johan"))

console.log(productName(products))

console.log("In stock products", inStockProducts(products))
