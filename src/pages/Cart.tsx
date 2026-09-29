import useCart from "@/hooks/useCart";

const Cart = () => {
    const { cart } = useCart()

    return (
        <>
            <h1>Kundvag</h1>
            <ul>
                {cart.map((product) => (
                    <li key={product._id}>
                        <h2>{product.title}</h2>
                        <p>{product.price} kr</p>
                        <p>{product.quantity}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Cart