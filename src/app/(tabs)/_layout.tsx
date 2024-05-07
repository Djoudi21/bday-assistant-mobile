import {Tabs} from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {View} from "react-native";

export default function TabsLayout() {

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'blue',
        }}>
            <Tabs.Screen
                name="contacts"
                options={{
                    tabBarActiveTintColor: '#512da8',
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => <View className={'pt-2'}>
                        <FontAwesome size={24} name="users" color={color} />
                    </View>,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    tabBarActiveTintColor: '#512da8',
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) =>
                        <View className={'pt-2'}>
                            <FontAwesome size={24} name="calendar" color={color} />
                        </View>,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    tabBarActiveTintColor: '#512da8',
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) =>
                        <View className={'pt-2'}>
                        <FontAwesome size={24} name="cog" color={color} />
                    </View>,
                }}
            />
        </Tabs>
    )
}
