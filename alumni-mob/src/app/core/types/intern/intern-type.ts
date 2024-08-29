import { CompanyType } from "../company/company-type"
import { PoeType } from "../poe/poe-type"

export type InternType = {
    _id?: string
    lastname: string
    firstname: string
    gender: string
    mails?: Array<string>
    phone: string
    occupation: string
    company: CompanyType
    poe: PoeType
}