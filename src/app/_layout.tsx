import "../global.css";
import {router, Stack} from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import {useEffect} from "react";
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
    useEffect(() => {
        router.replace('/(tabs)');
    })
  return (
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
  )
}
