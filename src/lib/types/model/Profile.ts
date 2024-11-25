

export type ProfileModelType<T> = T & {
    mailId: string
    name: string
    phoneNo: string
    address: string
    image: string
    about: string
    yearOfExpr: string
    resume: string
    language: string[]
    nationality: string
    socialLinks: {
        name: string,
        url: string
    }[]
}