interface ICommentRequest{
    content:string,
    user:string,
    product:string,
    created_at:Date,
}

interface IComment {
    id: string
    content:string,
    user:string,
    product:string,
    created_at:Date,
}

interface ICommentId {
    id: string
}

export {IComment, ICommentId, ICommentRequest}