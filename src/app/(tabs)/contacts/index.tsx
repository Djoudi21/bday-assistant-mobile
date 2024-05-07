import {SafeAreaView, TouchableOpacity} from "react-native";
import { FlashList } from "@shopify/flash-list";
import ContactListItem from "@/components/ContactListItem";
import { useRouter} from "expo-router";

export default function ContactsTab() {
    const router= useRouter();
    const DATA = [
        {
            name: "Abdelkrim",
            birthday: 'bday'
        },
        {
            name: "Fabienne",
            birthday: 'bday'
        },
    ];

    return (
        <SafeAreaView className={'flex-1'} style={{flex: 1}}>
            <FlashList
                contentContainerStyle={{padding: 4}}
                data={DATA}
                renderItem={({ item }) => <TouchableOpacity className={'mb-4'} onPress={() => {
                    router.push('/contacts/contactDetailsScreen')
                }}>
                    <ContactListItem birthday={item.birthday} name={item.name} />
                </TouchableOpacity>}
                estimatedItemSize={1}
            />
        </SafeAreaView>
    )
}