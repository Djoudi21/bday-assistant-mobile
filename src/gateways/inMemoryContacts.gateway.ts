import {ContactsGateway} from "@/gateways/interfaces/contacts.gateway";
import {Contact, CreateContactResponse, ListContactsResponse} from "@/types";

export class InMemoryContactsGateway implements ContactsGateway {
    public contacts: Contact[] = [
        {name: 'ABDEqsdqsdLqe', birthday: 'bday', id: 1, description: 'zaer'},
        {name: 'sdf', birthday: 'bday', id: 2, description: 'zaer'},
    ];

    listContacts(): Promise<ListContactsResponse> {
        return Promise.resolve({
            data: {
                status: 200,
                contacts: this.contacts
            }
        });
    }

    createContact(newContact: Contact): Promise<CreateContactResponse> {
        this.contacts.push(newContact)
        return Promise.resolve({
            data: {
                status: 200,
                contact: this.contacts[0]
            }
        });;
    }
}
