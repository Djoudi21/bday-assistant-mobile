import { Text, View, TextInput, Button } from "react-native"
import { useForm, Controller } from "react-hook-form"
import RNDateTimePicker from "@react-native-community/datetimepicker";

type FormData = {
    name: string
    birthday: Date
    description: string
}

export default function ContactForm() {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            name: "",
            birthday: new Date(),
            description: ''
        },
    })

    const onSubmit = (data) => console.log(data.birthday)

    return  <View>
        <Controller
            control={control}
            rules={{
                required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    placeholder="Name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
            )}
            name="name"
        />
        {errors.name && <Text>This is required.</Text>}

        <Controller
            control={control}
            rules={{
                maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <RNDateTimePicker
                    onChange={(event, selectedDate) => {
                        onChange(selectedDate);
                    }}
                    display={'spinner'}
                    value={value}
                />
            )}
            name="birthday"
        />

        <Controller
            control={control}
            rules={{
                required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    placeholder="Description"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
            )}
            name="description"
        />
        {errors.name && <Text>This is required.</Text>}

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
}