import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import useCart from "@/hooks/useCart";

function Confirmation() {
    const { order } = useCart()

    if (!order) {
        return (
            <>
                <h1>Ingen order</h1>
                <p>Det finns ingen order att visa.</p>
                <Link to="/shop">Till butiken</Link>
            </>
        )
    }

    const { customer } = order

    return (
        <>
            <h1>Tack för ditt köp!</h1>
            <p>
                Din order <strong>#{order.orderNumber}</strong> är mottagen. En bekräftelse skickas till {customer.email}.
            </p>

            <div className="mt-4 grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Din order</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-2">
                            {order.items.map((item) => (
                                <li key={item._id} className="flex justify-between gap-4">
                                    <span className="truncate">{item.quantity} × {item.title}</span>
                                    <span className="shrink-0">{Math.round(item.price) * item.quantity} kr</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter className="justify-between font-semibold">
                        <span>Totalt</span>
                        <span>{order.total} kr</span>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Leveransuppgifter</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{customer.name}</p>
                        <p>{customer.address}</p>
                        <p>{customer.zip} {customer.city}</p>
                        <p className="mt-2 text-muted-foreground">{customer.phone}</p>
                    </CardContent>
                </Card>
            </div>

            <Button className="mt-6" render={<Link to="/shop" />}>Fortsätt handla</Button>
        </>
    )
}

export default Confirmation
