import type { Comment, NewComment } from "../types/comment.type";
import { request } from "./api";

const BASE_URL = "https://jsonplaceholder.typicode.com/comments"

const JSON_HEADERS = { "Content-Type": "application/json" }

export function getComments(): Promise<Comment[]> {
    return request(`${BASE_URL}?_limit=10`, "Kunde inte hämta kommentarerna")
}

export function createComment(comment: NewComment): Promise<Comment> {
    return request(BASE_URL, "Kunde inte skapa kommentaren", {
        method: "POST",
        headers: JSON_HEADERS,
        body: JSON.stringify(comment),
    })
}

export async function deleteComment(id: number) {
    await request(`${BASE_URL}/${id}`, "Kunde inte ta bort kommentaren", {
        method: "DELETE",
    })
}
