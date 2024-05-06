import React from "react";
import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import {router} from "expo-router";

export default function SignInScreen() {
    const { signIn, setActive, isLoaded } = useSignIn();

    const [emailAddress, setEmailAddress] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSignInPress = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignIn = await signIn.create({
                identifier: emailAddress,
                password,
            });
            // This is an important step,
            // This indicates the user is signed in
            await setActive({ session: completeSignIn.createdSessionId });
            router.replace('/(tabs)');
        } catch (err: any) {
            console.log(err);
        }
    };
    return (
        <SafeAreaView>
            <View>
                <TextInput
                    autoCapitalize="none"
                    value={emailAddress}
                    placeholder="Email..."
                    onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
                />
            </View>

            <View>
                <TextInput
                    value={password}
                    placeholder="Password..."
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity onPress={onSignInPress}>
                <Text>Sign in</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}