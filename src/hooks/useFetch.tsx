import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error("Någonting gick fel")
                }

                const data = await response.json()
                setData(data)
            } catch (error) {
                setError((error as Error).message)
            } finally {
                setIsLoading(false)
            }
        }

        getData()
    }, [])

    return { data, isLoading, error }
}

export default useFetch