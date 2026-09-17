import { useQuery } from "@tanstack/react-query";

function useFetch<T>(url: string, staleTime = 60_000) {
    const { data, isLoading, error } = useQuery<T>({
        queryKey: [url],
        queryFn: async () => {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error("Någonting gick fel")
            }

            return response.json() as Promise<T>
        },
        staleTime,
    })

    return {
        data: data ?? null,
        loading: isLoading,
        error: error ? (error as Error).message : null,
    }
}

export default useFetch