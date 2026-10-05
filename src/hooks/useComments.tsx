import { useQuery } from "@tanstack/react-query";
import { getComments } from "../services/comment.service";

function useComments() {
    return useQuery({
        queryKey: ["comments"],
        queryFn: getComments,
    })
}

export default useComments
