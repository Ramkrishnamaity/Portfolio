import { Types } from "mongoose"


export type ExperienceModelType<T> = T & {
    userId: Types.ObjectId
    role: string
    company: string
    startDate: string
    endDate: string
}