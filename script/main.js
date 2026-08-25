//export/import

import products from "./products.js"
import { greetUser } from "./greet.js"
import { productName } from "./inventory.js"

console.log("Importet greeting:", greetUser("Johan"))

console.log(productName(products))
