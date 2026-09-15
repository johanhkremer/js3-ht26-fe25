import useFetch from "../hooks/useFetch";

type Comment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const Comments = () => {
    const { data: comments, isLoading, error } = useFetch<Comment[]>("https://jsonplaceholder.typicode.com/comments?_limit=10")

    if (isLoading) {
        return <p>Laddar data...</p>
    }

    if (error) {
        return <p>Något gick fel: {error}</p>
    }

    if (!comments) {
        return <p>Ingen data</p>
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