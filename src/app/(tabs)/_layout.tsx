import {Tabs} from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View } from "react-native";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="family"
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => <View className={'pt-2'}>
                        <FontAwesome size={28} name="users" color={color} />
                    </View>,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) =>
                        <View className={'pt-2'}>
                            <FontAwesome size={28} name="calendar" color={color} />
                        </View>,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) =>
                        <View className={'pt-2'}>
                        <FontAwesome size={28} name="cog" color={color} />
                    </View>,
                }}
            />
        </Tabs>
    )
}
