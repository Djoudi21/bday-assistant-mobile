import {SafeAreaView} from "react-native";
import {Calendar} from "react-native-calendars";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {Contact, ListContactsResponse} from "@/types";
import {FetchContactsGateway} from "@/gateways/fetchContacts.gateway";
import {ListContactsUseCase} from "@/use-cases/contacts/listContacts";
import {useUser} from "@clerk/clerk-expo";
import {useMarkedDates} from "@/utils/useMarkedDates";

export default function CalendarTab() {
    const [selected, setSelected] = useState('');
    const {user} = useUser()
    const {transformBirthdaysData} = useMarkedDates()
    const fetchContactsList = async (): Promise<ListContactsResponse['data']['contacts']> => {
        const contactsGateway = new FetchContactsGateway(user.id)
        const listContactsUseCase = new ListContactsUseCase(contactsGateway);
        const res = await listContactsUseCase.execute()
        const contacts = res.data.contacts
        return new Promise(resolve => resolve(contacts))
    }

    // Queries
    const { data } = useQuery<Contact[]>({
        queryKey: ['contacts'],
        queryFn: async () => {
            return await fetchContactsList()
        },
    })

    const birthdaysData = transformBirthdaysData(data);


    return (
        <SafeAreaView className={'flex justify-around h-screen overflow-y-scroll'}>
            <Calendar
                style={{
                    height: '80%',
                    width: '100%',
                }}
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{...birthdaysData}}
            />
        </SafeAreaView>
    )
}
