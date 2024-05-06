import "../global.css";
import { Slot, Stack } from "expo-router";

export default function Layout() {
  return (
      <Stack
          screenOptions={{
            headerShown: false,
          }}>
        <Stack.Screen name="login" options={{headerShown: true}} />
        <Stack.Screen name="register" options={{headerShown: true}} />
      </Stack>
  )
}
