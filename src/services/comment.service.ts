import type { Comment, NewComment } from "../types/comment.type";

// En service samlar alla anrop mot en resurs på ett ställe. Komponenterna
// behöver inte veta något om url:er, metoder eller headers.
const BASE_URL = "https://jsonplaceholder.typicode.com/comments"

// GET - hämtar data, ändrar ingenting på servern.
export async function getComments(): Promise<Comment[]> {
    const response = await fetch(`${BASE_URL}?_limit=10`)

    if (!response.ok) {
        throw new Error("Kunde inte hämta kommentarerna")
    }

    return response.json()
}

// POST - skapar en ny kommentar. Datan skickas som JSON i body.
export async function createComment(comment: NewComment): Promise<Comment> {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
    })

    if (!response.ok) {
        throw new Error("Kunde inte skapa kommentaren")
    }

    return response.json()
}

// PUT - ersätter hela kommentaren, så alla fält måste skickas med.
export async function updateComment(comment: Comment): Promise<Comment> {
    const response = await fetch(`${BASE_URL}/${comment.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
    })

    if (!response.ok) {
        throw new Error("Kunde inte uppdatera kommentaren")
    }

    return response.json()
}

// PATCH - ändrar bara de fält som skickas med, resten lämnas orörda.
export async function patchComment(id: number, changes: Partial<NewComment>): Promise<Comment> {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(changes),
    })

    if (!response.ok) {
        throw new Error("Kunde inte ändra kommentaren")
    }

    return response.json()
}

// DELETE - tar bort kommentaren. Inget body behövs, id:t ligger i url:en.
export async function deleteComment(id: number): Promise<void> {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    })

    if (!response.ok) {
        throw new Error("Kunde inte ta bort kommentaren")
    }
}
