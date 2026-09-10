export type Product = { id: number, name: string, price: number, inStock: boolean, description: string }

export const products: Product[] = [
    {
        id: 1,
        name: "Ryggsäck Mini",
        price: 499,
        inStock: true,
        description: "Lätt vardagsryggsäck med flera fack. Storlek S-XL.",
    },
    {
        id: 2,
        name: "Vattenflaska",
        price: 149,
        inStock: false,
        description: "Läckertät flaska på 750 ml, tål disk i maskin.",
    },
    {
        id: 3,
        name: "Trådlösa hörlurar",
        price: 699,
        inStock: true,
        description: "Kompakta in-ear-hörlurar med laddningsfodral.",
    },
    {
        id: 4,
        name: "Termosbägare Aurora",
        price: 199,
        inStock: false,
        description: "Håller drycken varm i upp till 8 timmar.",
    },
    {
        id: 5,
        name: "Solpanel, bärbar",
        price: 649,
        inStock: true,
        description: "Vikbar solpanel för laddning av mindre elektronik utomhus.",
    },
]