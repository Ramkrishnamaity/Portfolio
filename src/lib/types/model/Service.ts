import { Types } from "mongoose"


export type ServiceModelType<T> = T & {
    userId: Types.ObjectId
    serviceName: string
    serviceDesc: string
}