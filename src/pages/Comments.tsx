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
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Kunde inte hämta kommentarer");
                }
                return response.json();
            })
            .then((data: Comment[]) => setComments(data))
            .catch((err: Error) => setError(err.message))
    }, [])

    if (error) {
        return <p>Något gick fel: {error}</p>
    }

    return (
        <div>
            <h2>Kommentarer</h2>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.id}</p>
                    <p>{comment.name}</p>
                </div>
            ))}

        </div>
    )
}

export default Comments