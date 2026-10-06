import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";

function Cart() {
    const { cart, totalPrice, totalItems, clearCart } = useCart()

    if (cart.length === 0) {
        return (
            <div className="mx-auto flex max-w-md flex-col items-center gap-4 py-16 text-center">
                <h1 className="text-3xl font-bold">Kundvagn</h1>
                <p className="text-muted-foreground">Din kundvagn är tom.</p>
                <Button render={<Link to="/shop" />}>Till butiken</Button>
            </div>
        )
    }

    return (
        <div className="mx-auto max-w-5xl py-8">
            <div className="flex items-baseline justify-between">
                <h1 className="text-3xl font-bold">Kundvagn</h1>
                <Button variant="ghost" size="sm" onClick={clearCart}>
                    Töm kundvagn
                </Button>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_20rem] md:items-start">
                <ul className="flex flex-col gap-3">
                    {cart.map((product) => (
                        <li key={product._id}>
                            <Card className="flex-row items-center gap-4 p-4">
                                <div className="flex size-20 shrink-0 items-center justify-center rounded-md bg-muted p-2">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate font-medium">{product.title}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {Math.round(product.price)} kr · Antal: {product.quantity}
                                    </p>
                                </div>
                                <p className="shrink-0 font-semibold">
                                    {Math.round(product.price * product.quantity)} kr
                                </p>
                            </Card>
                        </li>
                    ))}
                </ul>

                <Card className="md:sticky md:top-6">
                    <CardHeader>
                        <CardTitle>Sammanfattning</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Antal varor</span>
                            <span>{totalItems}</span>
                        </div>
                        <div className="flex justify-between border-t pt-4 text-lg font-semibold">
                            <span>Totalt</span>
                            <span>{totalPrice} kr</span>
                        </div>
                        <Button className="w-full" render={<Link to="/checkout" />}>
                            Gå till kassan
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Cart
