import { Input } from "@base-ui/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { useState } from "react";

function LoginUseState() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handelSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log({ email, password })
    }

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>UseState</CardTitle>
                <CardDescription>
                    Varje fält styrs av ett eget useState.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handelSubmit}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">E-post</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
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
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
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

export default LoginUseState