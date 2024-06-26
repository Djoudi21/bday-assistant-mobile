import {SafeAreaView, } from "react-native";
import React from "react";
import ContactForm from "@/components/ContactForm";
import {CreateContactResponse, NewContact} from "@/types";
import {FetchContactsGateway} from "@/gateways/fetchContacts.gateway";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ActivityIndicator} from "react-native-paper";
import {COLORS} from "@/utils/colors";
import {CreateContactUseCase} from "@/use-cases/contacts/createContactUseCase";
import {useRouter} from "expo-router";
import {format} from "date-fns";
import {useUser} from "@clerk/clerk-expo";

export default function ContactFormScreen() {
    const router = useRouter();
    const queryClient = useQueryClient()
    const {user} = useUser()

    const createContact = async (contact: NewContact): Promise<CreateContactResponse['data']['contact']> => {
        const contactsGateway = new FetchContactsGateway(user.id)
        const createContactUseCase = new CreateContactUseCase(contactsGateway);
        const newContact: NewContact = {
            name: contact.name,
            description: contact.description,
            birthday: contact.birthday,
        }

        const res = await createContactUseCase.execute(newContact)
        const createdContact = res.data.contact
        return new Promise(resolve => resolve(createdContact))
    }

    // Mutations
    const addMutation = useMutation({
        mutationFn: (data: NewContact) => createContact(data),
        onSuccess: () => {
            router.navigate('/contacts')
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({queryKey: ['contacts']})
        },
    })

    return <SafeAreaView>
        <ContactForm onSubmit={(data: NewContact) => addMutation.mutate(data)} />
    </SafeAreaView>
}
