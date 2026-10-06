import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
    { value: "2018", label: "Startade vi" },
    { value: "12", label: "Personer i teamet" },
    { value: "1 arbetsdag", label: "Svarstid på frågor" },
]

const values = [
    {
        title: "Kvalitet före kvantitet",
        text: "Varje produkt vi tar in testas av oss innan den hamnar i butiken. Hellre ett litet sortiment vi står för än en lång lista vi inte känner till.",
    },
    {
        title: "Raka relationer",
        text: "Vi jobbar direkt med tillverkarna. Det gör att vi kan hålla rimliga priser utan att tumma på materialval eller arbetsvillkor.",
    },
    {
        title: "Personlig service",
        text: "Kontor och lager ligger i samma byggnad. Den som packar din order är samma person som svarar när du hör av dig.",
    },
]

function About() {
    return (
        <>
            <section className="flex flex-col gap-4 py-8 md:py-12">
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">Om oss</h1>
                <p className="max-w-2xl text-lg text-muted-foreground">
                    Vi startade 2018 med en enkel idé: att göra det lätt att hitta produkter som
                    håller. Istället för att fylla hyllorna med allt som går att sälja väljer vi ut
                    ett mindre sortiment som vi själva skulle använda hemma.
                </p>
            </section>

            <section aria-label="Butiken i siffror" className="py-4">
                <dl className="grid gap-4 sm:grid-cols-3">
                    {stats.map(({ value, label }) => (
                        <Card key={label}>
                            <CardContent className="flex flex-col gap-1">
                                <dd className="order-1 text-3xl font-bold">{value}</dd>
                                <dt className="order-2 text-muted-foreground">{label}</dt>
                            </CardContent>
                        </Card>
                    ))}
                </dl>
            </section>

            <section aria-labelledby="values-heading" className="py-6">
                <h2 id="values-heading" className="mb-4 text-2xl font-semibold">Vad vi står för</h2>
                <ul className="grid gap-4 md:grid-cols-3">
                    {values.map(({ title, text }) => (
                        <li key={title}>
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle>{title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-muted-foreground">{text}</CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
            </section>

            <section aria-labelledby="team-heading" className="py-6">
                <h2 id="team-heading" className="mb-2 text-2xl font-semibold">Vårt team</h2>
                <p className="max-w-2xl text-muted-foreground">
                    Vi är ett litet team på tolv personer med kontor och lager i samma byggnad.
                    Det betyder korta vägar, snabba svar och att ingen order försvinner mellan
                    stolarna.
                </p>
            </section>

            <section aria-labelledby="contact-heading" className="py-6">
                <Card>
                    <CardHeader>
                        <CardTitle id="contact-heading" className="text-2xl">Kontakt</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-start gap-4">
                        <p className="max-w-2xl text-muted-foreground">
                            Har du funderingar kring en beställning, en produkt eller ett samarbete?
                            Hör av dig så återkommer vi inom ett arbetsdygn.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Button render={<a href="mailto:hej@exempel.se" />}>
                                <Mail aria-hidden="true" /> hej@exempel.se
                            </Button>
                            <Button variant="outline" render={<Link to="/shop" />}>Till butiken</Button>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </>
    )
}

export default About
