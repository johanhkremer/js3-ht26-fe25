// Typad variabel – TypeScript kollar att värdet alltid matchar typen
let age: number = 45

// Fel: en string kan inte tilldelas en number-variabel, ger kompileringsfel
age = "string"

// Array där varje element måste vara en number
const array: number[] = [1, 2, 3]

// Interface beskriver formen på ett objekt (vilka properties det måste ha)
export interface products {
    name: string,
    price: number,
    stock: number,
    inStock: boolean,
    category: string
}[]

// Samma form fast som en type – kan användas ungefär likadant
type Product = {
    name: string,
    price: number,
    stock: number,
    inStock: boolean,
    category: string
}

// Skillnad interface vs type:
// - interface kan bara beskriva objekt, men flera deklarationer med samma namn slås ihop (bra för utökning)
// - type kan beskriva vad som helst (objekt, union, primitiv m.m.), men går inte att deklarera om/utöka i efterhand

//Union types – variabeln får bara vara ett av dessa exakta strängvärden
type Status = "godkänd" | "Inte godkänd" | "pågående"