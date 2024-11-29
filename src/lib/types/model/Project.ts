import { Types } from "mongoose";

export type ProjectModelType<T> = T & {
    userId: Types.ObjectId
    projectName: string
    projectDesc: string
    image: string
    techs: string[]
    repoUrl: string
    liveUrl: string
}