import { ReactNode } from "react"


export type CommonPropsType = {
    children: ReactNode
}

export type CommonResponceType <T = Record<string, any>> = T & {
    status: boolean,
    message: string,
    data?: T,
    error?: any
}

export type CommonModelType = {
    createdAt?: Date
    updatedAt?: Date
    isDeleted?: boolean
}
