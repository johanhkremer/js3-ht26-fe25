console.log("test 🔥 123", 123, true, false)
console.log(typeof [1, "string", 3])
console.log({
    name: "Johan",
    age: 45
})

console.log(age, "🔥")

//* Datatyper

/*
*primitiva
-------------
strings     - text
number      - tal
boolean     - true/false
undefined   - saknas värde
null        - medvetet saknas värde

-----------
bigint väldigt stora tal
symbol unikt värde


*icke-primtiv
-------------
object (array)

*/

//Variabler let, const, var
let user = "johan"

//scope
{
    var age = 45
}

console.log(age)

// function (function, arrow-function)

function numbers(num1, num2) {
    return num1 + num2
}

console.log("vanlig function:", numbers(5, 5))

const numbers2 = num => num + 2


console.log("arrow function:", numbers2(1))

//Template literals
const login = (user) => {
    return `Välkommen ${user}`
}

console.log(login("Johan"))