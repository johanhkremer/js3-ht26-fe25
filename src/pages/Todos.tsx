import { useQuery } from "@tanstack/react-query";

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const Todos = () => {
    const {
        data: todos,
        isLoading,
        error } = useQuery<Todo[]>({
            queryKey: ["todos"],
            queryFn: async () => {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")

                if (!response.ok) {
                    throw new Error("Någonting gick fel")
                }

                return response.json() as Promise<Todo[]>
            }
        })

    if (isLoading) {
        return <p>Todos laddas...</p>
    }

    if (error) {
        return <p>Någonting gick fel: {error.message}</p>
    }

    if (!todos) {
        return <p>Inga todos idag 😢</p>
    }



    return (
        <>
            <h1>Att göra lista:</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <h2>{todo.title}</h2>
                        {todo.completed
                            ? <p>Todo gjord ✅</p>
                            : <p>Todo inte gjord 🛑</p>
                        }
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos