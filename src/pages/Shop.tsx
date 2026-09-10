import ProductList from "../components/ProductList";

type ShopProps = {
    onAddToCart: () => void
}

const Shop = ({ onAddToCart }: ShopProps) => {
    return (
        <>
            <h1>Butik</h1>
            <h2>Våra produkter</h2>
            <ProductList onAddToCart={onAddToCart} />
        </>

    )
}

export default Shop