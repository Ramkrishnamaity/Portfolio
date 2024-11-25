import { Types } from "mongoose"


export type EducationModelType<T> = T & {
    userId: Types.ObjectId
    college: string
    degree: string
    startDate: string
    endDate: string
}