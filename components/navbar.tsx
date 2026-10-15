"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBagIcon } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { siteLinks } from "@/components/site-links"

function isActive(pathname: string, href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href)
}

export function Navbar() {
    const pathname = usePathname()

    return (
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
                <ShoppingBagIcon className="size-5 text-primary" />
                Butiken
            </Link>

            <NavigationMenu>
                <NavigationMenuList>
                    {siteLinks.map((link) => (
                        <NavigationMenuItem key={link.href}>
                            <NavigationMenuLink
                                active={isActive(pathname, link.href)}
                                className={navigationMenuTriggerStyle()}
                                render={<Link href={link.href}>{link.label}</Link>}
                            />
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
