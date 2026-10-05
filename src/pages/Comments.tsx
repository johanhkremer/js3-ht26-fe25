import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useComments from "../hooks/useComments";
import useCreateComment from "../hooks/useCreateComment";
import useDeleteComment from "../hooks/useDeleteComment";
import { Button } from "../components/ui/button";

const commentSchema = z.object({
    name: z.string().min(2, "Namnet måste ha minst 2 tecken."),
    email: z.email("Du måste ange en giltig e-post adress."),
    body: z.string().min(5, "Kommentaren måste ha minst 5 tecken.")
})

type CommentFormData = z.infer<typeof commentSchema>

function Comments() {
    const { data: comments, isLoading, error } = useComments()
    const addComment = useCreateComment()
    const deleteComment = useDeleteComment()

    const { register, handleSubmit, reset, formState: { errors } } = useForm<CommentFormData>({
        resolver: zodResolver(commentSchema),
    })

    function onSubmit(data: CommentFormData) {
        addComment.mutate({ postId: 1, ...data }, { onSuccess: () => reset() })
    }

    if (isLoading) {
        return <p>Laddar data...</p>
    }

    if (error) {
        return <p>Något gick fel: {error.message}</p>
    }

    if (!comments) {
        return <p>Ingen data</p>
    }

    return (
        <>
            <h2>Kommentarer</h2>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-4 flex max-w-md flex-col gap-2">
                <input className="rounded-[6px] border p-2" placeholder="Namn" {...register("name")} />
                {errors.name && <p className="text-destructive">{errors.name.message}</p>}
                <input className="rounded-[6px] border p-2" type="email" placeholder="E-post" {...register("email")} />
                {errors.email && <p className="text-destructive">{errors.email.message}</p>}
                <textarea className="rounded-[6px] border p-2" placeholder="Kommentar" {...register("body")} />
                {errors.body && <p className="text-destructive">{errors.body.message}</p>}
                <Button type="submit" disabled={addComment.isPending}>
                    {addComment.isPending ? "Skickar..." : "Skicka kommentar"}
                </Button>
                {addComment.isError && <p>Kunde inte skicka kommentaren</p>}
            </form>

            <ul>
                {comments.map((comment) => (
                    <li className="mt-4 rounded-[6px] border bg-card p-4 text-card-foreground" key={comment.id}>
                        <p>{comment.name}</p>
                        <p>{comment.body}</p>
                        <Button variant="destructive" size="sm" className="mt-2"
                            disabled={deleteComment.isPending && deleteComment.variables === comment.id}
                            onClick={() => deleteComment.mutate(comment.id)}>
                            Ta bort
                        </Button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Comments
