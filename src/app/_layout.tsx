import "../global.css";
import {router, Stack} from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import {useEffect} from "react";
import { PaperProvider, MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import { DevToolsBubble } from 'react-native-react-query-devtools';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

export default function RootLayout() {
    const queryClient = new QueryClient()
  return (
      <QueryClientProvider client={queryClient}>
          <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
              <PaperProvider>
                  <Stack
                      screenOptions={{
                        headerShown: false,
                      }}>
                    <Stack.Screen name="login" options={{headerShown: true}} />
                    <Stack.Screen name="register" options={{headerShown: true}} />
                  </Stack>
              </PaperProvider>
          </ClerkProvider>
          <DevToolsBubble />
      </QueryClientProvider>
  )
}
