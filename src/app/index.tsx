import { Link } from "expo-router";
import React from "react";
import {SafeAreaView, Text} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaView className="flex flex-1">
      <Text>Page</Text>
    </SafeAreaView>
  );
}
