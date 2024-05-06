import {Stack, useRouter} from "expo-router";
import {Text, TouchableOpacity} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function HomeLayout() {
    const router = useRouter();
    return <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen
            name={'index'}
            options={{
                headerStyle: { backgroundColor: 'white' },
                headerTitle: props => <Text></Text>,
                headerShown: true,
                headerRight: () => (
                    <TouchableOpacity onPress={()=> router.push('/contacts/contactForm')} className={'mr-4'}>
                        <FontAwesome name="user-plus" size={24} color="black" />
                    </TouchableOpacity>
                ),
            }}
        />
        <Stack.Screen
            name={'contact'}
            options={{
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: 'white' },
                headerShown: true,
            }}
        />
        <Stack.Screen
            name={'contactForm'}
            options={{
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: 'white' },
                headerTitle: props => <Text>Ajouter un contact</Text>,
                headerShown: true,
            }}
        />
    </Stack>
}