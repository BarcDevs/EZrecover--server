import { Role } from '@prisma/client'
import { Prettify } from '../index'
import { PostType } from './PostType'
import { ReplyType } from './ReplyType'
import { TagType } from './TagType'

export type UserType = {
    id: string
    firstName: string
    lastName: string
    username: string
    email: string
    image?: string
    role: Role
    posts?: PostType[]
    replies?: ReplyType[]
    followedTags?: Partial<TagType>[]
}

export type ServerUserType = Prettify<
    UserType & {
        password: string
        resetPasswordOTP?: number
        resetPasswordExpiration?: Date
        password_updated_at: Date
        created_at: Date
        active: boolean
        deleted_at?: Date
    }
>

export type NewUserType = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
}
