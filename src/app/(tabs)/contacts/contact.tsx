import {SafeAreaView,Text, TouchableOpacity} from "react-native";
import {useRouter, Stack} from "expo-router";

export default function Contact() {
    const router = useRouter();
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerShown: true,
                }}
            />
            <TouchableOpacity onPress={() => router.back()}>
                <Text>toto</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}