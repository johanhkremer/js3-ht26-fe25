import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'
import path from 'node:path'; // shadcn: behövs för att bygga sökvägen till src/
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // shadcn: låter Vite förstå "@/..."-importer när appen körs/byggs
  // (tsconfig-aliaset gäller bara för TypeScript, inte för Vite)
  resolve: {
    alias: {
      // import.meta.dirname = mappen som den här filen ligger i.
      // shadcn:s guide använder __dirname, men den finns bara i gamla CommonJS
      // (require), inte i ES-moduler (import/export). Vite varnar för __dirname
      // eftersom framtida versioner läser configen som ren ESM.
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})
