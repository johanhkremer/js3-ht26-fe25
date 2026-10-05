import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "../services/comment.service";
import type { Comment } from "../types/comment.type";

// useMutation ändrar data. Anropet körs först när vi kallar mutate().
function useCreateComment() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createComment,
        onSuccess: (created) => {
            // JSONPlaceholder sparar ingenting och svarar alltid med id 501,
            // så vi lägger in kommentaren i cachen själva med ett eget id.
            // Mot ett riktigt API kör vi istället
            // queryClient.invalidateQueries({ queryKey: ["comments"] }).
            queryClient.setQueryData<Comment[]>(["comments"], (old = []) => [
                { ...created, id: Date.now() },
                ...old,
            ])
        },
    })
}

export default useCreateComment
