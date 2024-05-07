import {SafeAreaView, Text} from "react-native";
import {Calendar} from "react-native-calendars";
import {useState} from "react";
import {COLORS} from "@/utils/colors";

export default function CalendarTab() {
    const [selected, setSelected] = useState('');

    return (
        <SafeAreaView className={'flex justify-around h-screen overflow-y-scroll'}>
            <Calendar
                style={{
                    height: '80%',
                    width: '100%',
                }}
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    '2024-05-01': {selected: true, marked: true, selectedColor: COLORS.primary},
                    '2024-05-02': {marked: true},
                    '2024-05-03': {selected: true, marked: true, selectedColor: COLORS.primary}
                }}
            />
        </SafeAreaView>
    )
}