interface ICommentRequest{
    content:string,
    user:string,
    product:string,
    created_at:Date,
}

interface ICommentUpdate {
    id: string
    content?:string,
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

export {IComment, ICommentId, ICommentRequest, ICommentUpdate}