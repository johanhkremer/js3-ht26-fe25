import { Input } from "@base-ui/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8)
})

type LoginData = z.infer<typeof loginSchema>

const LoginReactHookFormZod = () => {
    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = (data: LoginData) => {
        console.log(data)
    }
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>React Hook Form</CardTitle>
                <CardDescription>
                    Register kopplar input till formuläret.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">E-post</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                {...register("email"), {
                                    required: true
                                }}
                            />
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