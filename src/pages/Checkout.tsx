import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCart from "@/hooks/useCart";

const checkoutSchema = z.object({
    name: z.string().min(2, "Namnet måste ha minst 2 tecken."),
    email: z.email("Du måste ange en giltig e-postadress."),
    phone: z.string().regex(/^[0-9+\-\s]{7,15}$/, "Ange ett giltigt telefonnummer."),
    address: z.string().min(3, "Du måste ange en adress."),
    zip: z.string().regex(/^\d{3}\s?\d{2}$/, "Postnumret måste bestå av 5 siffror."),
    city: z.string().min(2, "Du måste ange en ort."),
})

type CheckoutFormData = z.infer<typeof checkoutSchema>

const fields: { name: keyof CheckoutFormData, label: string, type?: string, autoComplete: string }[] = [
    { name: "name", label: "Namn", autoComplete: "name" },
    { name: "email", label: "E-post", type: "email", autoComplete: "email" },
    { name: "phone", label: "Telefon", type: "tel", autoComplete: "tel" },
    { name: "address", label: "Adress", autoComplete: "street-address" },
    { name: "zip", label: "Postnummer", autoComplete: "postal-code" },
    { name: "city", label: "Ort", autoComplete: "address-level2" },
]

function Checkout() {
    const { cart, totalPrice, placeOrder } = useCart()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
    })

    function onSubmit(data: CheckoutFormData) {
        placeOrder(data)
        navigate("/confirmation")
    }

    if (cart.length === 0) {
        return (
            <>
                <h1>Kassa</h1>
                <p>Din kundvagn är tom.</p>
                <Link to="/shop">Till butiken</Link>
            </>
        )
    }

    return (
        <>
            <h1>Kassa</h1>

            <div className="mt-4 grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Sammanfattning</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-2">
                            {cart.map((item) => (
                                <li key={item._id} className="flex justify-between gap-4">
                                    <span className="truncate">{item.quantity} × {item.title}</span>
                                    <span className="shrink-0">{Math.round(item.price) * item.quantity} kr</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter className="justify-between font-semibold">
                        <span>Totalt</span>
                        <span>{totalPrice} kr</span>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Dina uppgifter</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form id="checkout-form" onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-3">
                            {fields.map(({ name, label, type, autoComplete }) => (
                                <div key={name} className="flex flex-col gap-1.5">
                                    <Label htmlFor={name}>{label}</Label>
                                    <Input id={name} type={type} autoComplete={autoComplete}
                                        aria-invalid={!!errors[name]} {...register(name)} />
                                    {errors[name] && <p className="text-destructive">{errors[name].message}</p>}
                                </div>
                            ))}
                        </form>
                    </CardContent>
                    <CardFooter className="justify-between">
                        <Button variant="secondary" render={<Link to="/cart" />}>Tillbaka</Button>
                        <Button type="submit" form="checkout-form">Slutför köp</Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default Checkout
