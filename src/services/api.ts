export async function request<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, options)

    if (!response.ok) {
        throw new Error("Någonting gick fel")
    }

    return response.json() as Promise<T>
}
