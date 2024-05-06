import {SafeAreaView, TouchableOpacity} from "react-native";
import { FlashList } from "@shopify/flash-list";
import ListItem from "@/components/ListItem";
import { useRouter} from "expo-router";

export default function ContactsTab() {
    const router= useRouter();
    const DATA = [
        {
            name: "name",
            birthday: 'bday'
        },
        {
            name: "name",
            birthday: 'bday'
        },
    ];

    return (
        <SafeAreaView className={'flex-1'} style={{flex: 1}}>
            <FlashList
                contentContainerStyle={{padding: 4}}
                data={DATA}
                renderItem={({ item }) => <TouchableOpacity onPress={() => {
                    router.push('/contacts/contact')
                }}>
                    <ListItem birthday={item.birthday} name={item.name} />
                </TouchableOpacity>}
                estimatedItemSize={1}
            />
        </SafeAreaView>
    )
}