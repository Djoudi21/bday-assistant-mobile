import {SafeAreaView, Text, TouchableOpacity} from "react-native";
import { FlashList } from "@shopify/flash-list";
import ListItem from "@/components/ListItem";
import {router, Stack} from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ContactsTab() {
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
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'white' },
                    headerTitle: props => <Text></Text>,
                    headerShown: true,
                    headerRight: () => (
                        <TouchableOpacity className={'mr-4'}>
                            <FontAwesome name="user-plus" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                }}
            />
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