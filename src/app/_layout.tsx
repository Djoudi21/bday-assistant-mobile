import "../global.css";
import {Stack} from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { PaperProvider } from 'react-native-paper';
import { DevToolsBubble } from 'react-native-react-query-devtools';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {usePushNotifications} from "@/hooks/usePushNotifications";

export default function RootLayout() {
    const queryClient = new QueryClient()
    const {expoPushToken, notification} = usePushNotifications()
    const data = JSON.stringify(notification, undefined, 2)
    console.log('DATA', data)
  return (
      <QueryClientProvider client={queryClient}>
                  <PaperProvider>
                          <Stack
                              screenOptions={{
                                headerShown: false,
                              }}>
                            <Stack.Screen name="login" options={{headerShown: true}} />
                            <Stack.Screen name="register" options={{headerShown: true}} />
                          </Stack>
                  </PaperProvider>
          <DevToolsBubble />
      </QueryClientProvider>
  )
}
