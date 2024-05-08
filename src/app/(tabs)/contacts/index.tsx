import {SafeAreaView, TouchableOpacity} from "react-native";
import {FlashList} from "@shopify/flash-list";
import ContactListItem from "@/components/ContactListItem";
import {useRouter} from "expo-router";
import {useMutationState, useQuery,} from '@tanstack/react-query'
import {ActivityIndicator} from "react-native-paper";
import {COLORS} from "@/utils/colors";
import {Contact, ListContactsResponse, NewContact} from "@/types";
import {ListContactsUseCase} from "@/use-cases/contacts/listContacts";
import {FetchContactsGateway} from "@/gateways/fetchContacts.gateway";
import {format} from "date-fns";
import {useUser} from "@clerk/clerk-expo";

export default function ContactsTab() {
    const router= useRouter();
    const {user} = useUser()

    const fetchContactsList = async (): Promise<ListContactsResponse['data']['contacts']> => {
        const contactsGateway = new FetchContactsGateway(user.id)
        const listContactsUseCase = new ListContactsUseCase(contactsGateway);
        const res = await listContactsUseCase.execute()
        const contacts = res.data.contacts
        return new Promise(resolve => resolve(contacts))
    }

    // Queries
    const { isPending, isError, data, error } = useQuery<Contact[]>({
        queryKey: ['contacts'],
        queryFn: async () => {
            return await fetchContactsList()
        }
    })

    if (isPending) {
        return   <ActivityIndicator animating={true} color={COLORS.primary} />
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <SafeAreaView className={'flex-1'} style={{flex: 1}}>
            <FlashList
                contentContainerStyle={{padding: 4}}
                data={data ?? []}
                renderItem={({ item }) => <TouchableOpacity className={'mb-4'} onPress={() => {
                    router.push('/contacts/contactDetailsScreen')
                }}>
                    <ContactListItem birthday={format(item.birthday, 'MM-dd-yy')} name={item.name} />
                </TouchableOpacity>}
                estimatedItemSize={1}
            />
        </SafeAreaView>
    )
}
