import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {useSignUp} from "@clerk/clerk-expo";
import { router } from 'expo-router';
import {RegisterUserUseCase} from "@/use-cases/auth/registerUserUseCase";
import {FetchAuthGateway} from "@/gateways/fetchAuth.gateway";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function RegisterScreen() {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [emailAddress, setEmailAddress] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [hidePassword, setHidePassword] = React.useState(true);
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [pendingVerification, setPendingVerification] = React.useState(false);
    const [code, setCode] = React.useState("");

    // start the sign up process.
    const onSignUpPress = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            await signUp.create({
                firstName,
                lastName,
                emailAddress,
                password,
            });

            // send the email.
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            // change the UI to our pending section.
            setPendingVerification(true);
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    // This verifies the user using email code that is delivered.
    const onPressVerify = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            });
            const authGateway = new FetchAuthGateway(completeSignUp.createdUserId)
            const registerUserUseCase = new RegisterUserUseCase(authGateway)
            await registerUserUseCase.execute({
                email: emailAddress,
                password,
                firstname: firstName,
                lastname: lastName
            })
            await setActive({ session: completeSignUp.createdSessionId });
            router.replace('/(tabs)');
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    return (
        <View>
            {!pendingVerification && (
                <View>
                    <View>
                        <TextInput
                            autoCapitalize="none"
                            value={emailAddress}
                            placeholder="Adresse email"
                            onChangeText={(email) => setEmailAddress(email)}
                        />
                    </View>

                    <View className={'flex flex-row gap-4 items-center'}>
                        <TextInput
                            value={password}
                            placeholder="Mot de passe"
                            placeholderTextColor="#000"
                            secureTextEntry={hidePassword}
                            onChangeText={(password) => setPassword(password)}
                        />
                        <FontAwesome onPress={() => setHidePassword(!hidePassword)} name={`${hidePassword ? 'eye-slash' : 'eye'}`} />
                    </View>

                    <View>
                        <TextInput
                            autoCapitalize="none"
                            value={firstName}
                            placeholder="Prénom"
                            onChangeText={(firstname) => setFirstName(firstname)}
                        />
                    </View>

                    <View>
                        <TextInput
                            autoCapitalize="none"
                            value={lastName}
                            placeholder="Nom"
                            onChangeText={(lastname) => setLastName(lastname)}
                        />
                    </View>

                    <TouchableOpacity onPress={onSignUpPress}>
                        <Text>Sign up</Text>
                    </TouchableOpacity>
                </View>
            )}
            {pendingVerification && (
                <View>
                    <View>
                        <TextInput
                            value={code}
                            placeholder="Code..."
                            onChangeText={(code) => setCode(code)}
                        />
                    </View>
                    <TouchableOpacity onPress={onPressVerify}>
                        <Text>Verify Email</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}
