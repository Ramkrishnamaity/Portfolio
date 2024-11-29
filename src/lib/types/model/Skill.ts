import { Types } from "mongoose";

export type SkillModelType<T> = T & {
    userId: Types.ObjectId
    skillName: string
    skillIcon: string
}