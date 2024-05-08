export interface Contact {
    name: string
    birthday: string
    description: string
    id: number
}

export interface NewContact {
    name: string
    birthday: string
    description: string
}


export interface ListContactsResponse {
    data: {
        status: number
        contacts: Contact[]
    }
}

export interface CreateContactResponse {
    data: {
        status: number
        contact: Contact
    }
}
