import type { Comment, NewComment } from "../types/comment.type"
import { request } from "./api"

const BASE_URL = "https://jsonplaceholder.typicode.com/comments"

export function getComments() {
    return request<Comment[]>(`${BASE_URL}?_limit=10`)
}

export function createComment(comment: NewComment) {
    return request<Comment>(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
    })
}

export function deleteComment(id: number) {
    return request<object>(`${BASE_URL}/${id}`, { method: "DELETE" })
}
