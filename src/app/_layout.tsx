import "../global.css";
import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";

export default function RootLayout() {
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
