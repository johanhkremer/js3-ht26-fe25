import { ThemeContext } from "@/context/theme-context";
import { useContext } from "react";

function useTheme() {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error("useTheme måste användas innanför providern")
    }

    return context
}

export default useTheme
