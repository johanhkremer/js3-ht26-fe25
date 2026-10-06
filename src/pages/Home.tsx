import { Link } from "react-router-dom";
import { PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductList from "../components/ProductList";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useProducts } from "../hooks/useProducts";

const perks = [
    {
        icon: Truck,
        title: "Snabb leverans",
        text: "Beställ före 14 så skickar vi samma dag, med leverans inom 1–3 arbetsdagar.",
    },
    {
        icon: ShieldCheck,
        title: "Testat av oss",
        text: "Varje produkt har provats av teamet innan den får en plats i sortimentet.",
    },
    {
        icon: PackageCheck,
        title: "30 dagars öppet köp",
        text: "Passar den inte? Skicka tillbaka den inom 30 dagar så ordnar vi det.",
    },
]

function Home() {
    const { data: products, isLoading, error } = useProducts()

    return (
        <>
            <section className="flex flex-col items-start gap-4 py-8 md:py-12">
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Praktiska prylar för vardagen
                </p>
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
                    Prylar som håller – utvalda av oss, för dig
                </h1>
                <p className="max-w-xl text-lg text-muted-foreground">
                    Från ryggsäckar och vattenflaskor till hörlurar och bärbara solpaneler.
                    Ett litet sortiment där varje produkt är något vi själva skulle använda.
                </p>
                <div className="mt-2 flex flex-wrap gap-3">
                    <Button size="lg" render={<Link to="/shop" />}>Gå till butiken</Button>
                    <Button size="lg" variant="outline" render={<Link to="/about" />}>Om oss</Button>
                </div>
            </section>

            <section aria-labelledby="perks-heading" className="py-6">
                <h2 id="perks-heading" className="sr-only">Därför handlar du hos oss</h2>
                <ul className="grid gap-4 md:grid-cols-3">
                    {perks.map(({ icon: Icon, title, text }) => (
                        <li key={title}>
                            <Card className="h-full">
                                <CardHeader>
                                    <Icon className="mb-1 size-6" aria-hidden="true" />
                                    <CardTitle>{title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-muted-foreground">{text}</CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
            </section>

            <section aria-labelledby="featured-heading" className="py-6">
                <div className="mb-4 flex items-baseline justify-between gap-4">
                    <h2 id="featured-heading" className="text-2xl font-semibold">Utvalda produkter</h2>
                    <Link to="/shop">Visa alla →</Link>
                </div>

                {isLoading && (
                    <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4" aria-busy="true">
                        {Array.from({ length: 4 }, (_, i) => (
                            <li key={i}><ProductCardSkeleton /></li>
                        ))}
                    </ul>
                )}
                {error && <p>Kunde inte hämta produkter: {error.message}</p>}
                {products && <ProductList products={products.slice(0, 4)} />}
            </section>
        </>
    )
}

export default Home
