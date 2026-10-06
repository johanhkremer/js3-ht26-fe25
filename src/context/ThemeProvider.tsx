import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./theme-context";

const STORAGE_KEY = "vite-ui-theme"

function ThemeProvider({ children, defaultTheme = "system" }: { children: ReactNode; defaultTheme?: Theme }) {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(STORAGE_KEY) as Theme) || defaultTheme
    )

    useEffect(() => {
        const root = document.documentElement
        const media = window.matchMedia("(prefers-color-scheme: dark)")

        function apply() {
            const resolved = theme === "system" ? (media.matches ? "dark" : "light") : theme
            root.classList.remove("light", "dark")
            root.classList.add(resolved)
        }

        apply()

        // Följ OS-inställningen live när temat är "system"
        if (theme === "system") {
            media.addEventListener("change", apply)
            return () => media.removeEventListener("change", apply)
        }
    }, [theme])

    function changeTheme(newTheme: Theme) {
        localStorage.setItem(STORAGE_KEY, newTheme)
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
