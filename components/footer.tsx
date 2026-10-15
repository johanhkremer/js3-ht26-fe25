import Link from "next/link"
import { ShoppingBagIcon } from "lucide-react"

import { siteLinks } from "@/components/site-links"

export function Footer() {
    return (
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold">
                    <ShoppingBagIcon className="size-5 text-primary" />
                    Butiken
                </div>
                <p className="max-w-xs text-xs text-muted-foreground">
                    Ett litet skolprojekt i Next.js med kläder, smycken och prylar.
                </p>
            </div>

            <nav aria-label="Sidor" className="space-y-2 text-xs">
                <h2 className="font-semibold">Sidor</h2>
                <ul className="space-y-1 text-muted-foreground">
                    {siteLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="hover:text-foreground">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="space-y-2 text-xs">
                <h2 className="font-semibold">Kontakt</h2>
                <ul className="space-y-1 text-muted-foreground">
                    <li>hej@butiken.example</li>
                    <li>Storgatan 1, 111 22 Stockholm</li>
                    <li>Mån–fre 09–17</li>
                </ul>
            </div>

            <p className="border-t pt-4 text-xs text-muted-foreground sm:col-span-3">
                © 2026 Butiken. Alla produkter och uppgifter är fejk.
            </p>
        </div>
    )
}
