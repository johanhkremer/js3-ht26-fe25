import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import useCart from "@/hooks/useCart";

function Cart() {
    const { cart } = useCart()

    return (
        <>
            <h1>Kundvag</h1>
            <ul>
                {cart.map((product) => (
                    <li key={product._id} className="mt-5">
                        <Card>
                            <CardHeader>
                                <strong>{product.title}</strong>
                            </CardHeader>
                            <CardContent>
                                <p>{Math.round(product.price)} kr</p>
                            </CardContent>
                            <CardFooter>
                                <p>{product.quantity}</p>
                            </CardFooter>
                        </Card>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Cart