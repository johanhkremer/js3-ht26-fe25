export interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

// Det vi skickar när vi skapar en kommentar - id sätter servern.
export type NewComment = Omit<Comment, "id">
