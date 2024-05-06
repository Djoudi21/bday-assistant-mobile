import {Tabs, useNavigation} from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {View, Button, TouchableOpacity} from "react-native";

export default function TabsLayout() {
    const navigation = useNavigation();

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'blue',
        }}>
            <Tabs.Screen
                name="contacts"
                options={{
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
