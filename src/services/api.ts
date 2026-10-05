export async function request<T>(url: string, errorMessage: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, options)

    if (!response.ok) {
        throw new Error(errorMessage)
    }

    return response.json()
}
