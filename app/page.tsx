import Link from "next/link"
import { RotateCcwIcon, ShieldCheckIcon, TruckIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const perks = [
    { icon: TruckIcon, title: "Fri frakt", text: "På alla beställningar över 499 kr" },
    { icon: RotateCcwIcon, title: "30 dagars öppet köp", text: "Ångrar du dig? Skicka tillbaka" },
    { icon: ShieldCheckIcon, title: "Säker betalning", text: "Kort, Swish och faktura" },
]

const categories = [
    { name: "Herrkläder", blurb: "Jackor, tröjor och basplagg" },
    { name: "Damkläder", blurb: "Säsongens favoriter" },
    { name: "Smycken", blurb: "Silver, guld och mycket mer" },
    { name: "Elektronik", blurb: "Skärmar, hårddiskar och tillbehör" },
]

const reviews = [
    { name: "Maja S.", text: "Snabb leverans och produkten var precis som på bilden. Köper igen!" },
    { name: "Erik L.", text: "Smidigt att handla och kundservicen svarade på några minuter." },
    { name: "Nora K.", text: "Bra kvalitet för priset. Rekommenderas varmt." },
]

export default function Home() {
    return (
        <div className="space-y-16">
            <section className="border bg-muted/40">
                <div className="flex flex-col items-start gap-6 px-6 py-16">
                    <span className="text-xs font-medium uppercase tracking-wide text-primary">
                        Höstens nyheter är här
                    </span>
                    <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                        Bra prylar till ärliga priser
                    </h1>
                    <p className="max-w-xl text-muted-foreground">
                        Från vardagsplagg till smycken och teknik. Utforska hela sortimentet och
                        hitta något som passar just dig.
                    </p>
                    <div className="flex gap-3">
                        <Link href="/shop" className={cn(buttonVariants({ size: "lg" }))}>
                            Till shopen
                        </Link>
                        <Link href="/about" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                            Läs mer om oss
                        </Link>
                    </div>
                </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-3">
                {perks.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex items-start gap-3">
                        <Icon className="mt-0.5 size-5 text-primary" />
                        <div>
                            <div className="text-sm font-medium">{title}</div>
                            <div className="text-xs text-muted-foreground">{text}</div>
                        </div>
                    </div>
                ))}
            </section>

            <section className="space-y-6">
                <h2 className="text-xl font-semibold tracking-tight">Handla efter kategori</h2>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {categories.map((c) => (
                        <Link
                            key={c.name}
                            href="/shop"
                            className="space-y-1 border bg-card p-5 transition-colors hover:bg-muted"
                        >
                            <div className="text-sm font-medium">{c.name}</div>
                            <div className="text-xs text-muted-foreground">{c.blurb}</div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-xl font-semibold tracking-tight">Det säger kunderna</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                    {reviews.map((r) => (
                        <figure key={r.name} className="space-y-3 border bg-card p-5">
                            <blockquote className="text-sm">“{r.text}”</blockquote>
                            <figcaption className="text-xs text-muted-foreground">{r.name}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>
        </div>
    )
}
