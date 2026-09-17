import { useEffect, useState } from "react";

type Comment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const Comments = () => {
    const [comments, setComments] = useState<Comment[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true)
        setError(null)

        fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Kunde inte hämta kommentarer");
                }
                return response.json();
            })
            .then((data: Comment[]) => setComments(data))
            .catch((err: Error) => setError(err.message))
            .finally(() => setIsLoading(false))
    }, [])

    if (isLoading) {
        return <p>Laddar data...</p>
    }

    if (error) {
        return <p>Något gick fel: {error}</p>
    }

    return (
        <>
            <h2>Kommentarer</h2>
            <ul className="comment-list">
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <p>{comment.id}</p>
                        <p>{comment.name}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Comments