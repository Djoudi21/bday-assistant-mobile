import "../global.css";
import {router, Stack} from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import {useEffect} from "react";

export default function RootLayout() {
    useEffect(() => {
        router.replace('/(tabs)');
    })
  return (
      <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
          <Stack
              screenOptions={{
                headerShown: false,
              }}>
            <Stack.Screen name="login" options={{headerShown: true}} />
            <Stack.Screen name="register" options={{headerShown: true}} />
          </Stack>
      </ClerkProvider>
  )
}
