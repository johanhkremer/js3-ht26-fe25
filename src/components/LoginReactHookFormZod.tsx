import { Input } from "@base-ui/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    email: z.email("Du måste ange en giltig e-post adress."),
    password: z.string().min(8, "Lösenordet måste ha minst 8 tecken.")
})

type LoginData = z.infer<typeof loginSchema>

function LoginReactHookFormZod() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
    })

    function onSubmit(data: LoginData) {
        console.log(data)
    }
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>React Hook Form - ZOD</CardTitle>
                <CardDescription>
                    Register kopplar input till formuläret.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">E-post</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                {...register("email")}
                            />

                            {errors.email && <p className="text-destructive">{errors.email.message}</p>}
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Lösenord</Label>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Lösenord"
                                {...register("password")}
                            />

                            {errors.password && <p className="text-destructive">{errors.password.message}</p>}
                        </div>
                    </div>
                    <Button type="submit" className="w-full mt-5">
                        Login
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default LoginReactHookFormZod