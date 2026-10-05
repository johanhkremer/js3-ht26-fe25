import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment } from "../services/comment.service";
import type { Comment } from "../types/comment.type";

function useDeleteComment() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteComment,
        // variables är det vi skickade in till mutate(), här id:t.
        onSuccess: (_data, id) => {
            queryClient.setQueryData<Comment[]>(["comments"], (old = []) =>
                old.filter((comment) => comment.id !== id)
            )
        },
    })
}

export default useDeleteComment
