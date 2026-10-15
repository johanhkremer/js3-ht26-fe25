import { HeartHandshakeIcon, LeafIcon, TruckIcon } from "lucide-react"

const values = [
    {
        icon: LeafIcon,
        title: "Hållbart först",
        text: "Vi väljer leverantörer som tar ansvar för material, transporter och arbetsvillkor.",
    },
    {
        icon: TruckIcon,
        title: "Snabb leverans",
        text: "Beställ före 14 så skickar vi samma dag. Fri frakt över 499 kr.",
    },
    {
        icon: HeartHandshakeIcon,
        title: "Personlig service",
        text: "Du pratar alltid med en människa, och 30 dagars öppet köp på allt.",
    },
]

const team = [
    { name: "Astrid Lindqvist", role: "Grundare & VD" },
    { name: "Omar Haddad", role: "Inköp" },
    { name: "Clara Ek", role: "Kundservice" },
    { name: "Viktor Berg", role: "Utveckling" },
]

const stats = [
    { value: "2019", label: "Grundat" },
    { value: "12 000+", label: "Nöjda kunder" },
    { value: "400", label: "Produkter" },
]

function About() {
    return (
        <div className="space-y-16">
            <section className="max-w-2xl space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight">Om oss</h1>
                <p className="text-muted-foreground">
                    Butiken startade 2019 i ett litet kontor i Södermalm med en enkel idé: bra
                    prylar till ärliga priser, utan krångel. Idag hjälper vi tusentals kunder
                    varje månad, men vi har behållit känslan av en liten butik.
                </p>
            </section>

            <section className="grid grid-cols-3 gap-4 border-y py-8 text-center">
                {stats.map((s) => (
                    <div key={s.label}>
                        <div className="text-2xl font-semibold text-primary">{s.value}</div>
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                    </div>
                ))}
            </section>

            <section className="space-y-6">
                <h2 className="text-xl font-semibold tracking-tight">Det här tror vi på</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                    {values.map(({ icon: Icon, title, text }) => (
                        <div key={title} className="space-y-2 border bg-card p-5">
                            <Icon className="size-6 text-primary" />
                            <h3 className="text-sm font-medium">{title}</h3>
                            <p className="text-xs text-muted-foreground">{text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-xl font-semibold tracking-tight">Teamet</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {team.map((m) => (
                        <div key={m.name} className="space-y-2">
                            <div
                                aria-hidden
                                className="flex aspect-square items-center justify-center bg-muted text-2xl font-semibold text-muted-foreground"
                            >
                                {m.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                            <div className="text-sm font-medium">{m.name}</div>
                            <div className="text-xs text-muted-foreground">{m.role}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default About
