import { InternType } from "../intern/intern-type"
import { CommentType } from "./comment-type"


enum PostCategory {
    "Offre d'emploi",
    "Actualités",
    "Offre de stage"

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