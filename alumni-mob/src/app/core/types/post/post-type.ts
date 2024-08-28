import { InternType } from "../intern/intern-type"
import { CommentType } from "./comment-type"


export enum PostCategory {
    jobOffer = "Offre d'emploi",
    news = "Actualités",
    internshipOffer = "Offre de formation"

}
export type PostType = {
    id?: string
    title?: string
    content: string
    media?: string
    postedAt: Date
    author: InternType
    likes?: Array<InternType>
    comments?: Array<CommentType>
    category: PostCategory

}