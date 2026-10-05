import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createComment, deleteComment, getComments } from "../services/commentService"
import type { Comment } from "../types/comment.type"

const COMMENTS_KEY = ["comments"]

export function useComments() {
    return useQuery({
        queryKey: COMMENTS_KEY,
        queryFn: getComments,
        staleTime: Infinity, // jsonplaceholder sparar inget, så vi refetchar inte över våra lokala ändringar
    })
}

// jsonplaceholder sparar inget på riktigt, så vi uppdaterar cachen manuellt efter lyckad mutation
export function useAddComment() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createComment,
        onSuccess: (created) => {
            // API:et returnerar alltid id 501, så vi skapar ett eget unikt id
            const comment = { ...created, id: Date.now() }
            queryClient.setQueryData<Comment[]>(COMMENTS_KEY, (old = []) => [comment, ...old])
        },
    })
}

export function useDeleteComment() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteComment,
        onSuccess: (_, id) => {
            queryClient.setQueryData<Comment[]>(COMMENTS_KEY, (old = []) =>
                old.filter((c) => c.id !== id))
        },
    })
}
