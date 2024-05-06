import {View, Text} from "react-native";
import {useAssets} from "expo-asset";
import { Image } from 'expo-image';

interface Props {
    name: string
    birthday: string
    avatar?: HTMLImageElement
}
export default function ListItem({name, birthday}: Props) {
    const [assets] = useAssets([require('@/assets/images/avatar-svgrepo-com.svg')]);
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    return (
        <View className={'bg-white flex flex-row items-center p-4 mb-4 justify-between rounded-sm shadow-sm'}>
            <View className={'h-full w-1/3'}>
                {assets && <Image
                    style={{height: 50, width: 50}}
                    source={assets[0].uri}
                    placeholder={blurhash}
                    contentFit="cover"
                    transition={1000}
                />}
            </View>
            <View className={'w-2/3 h-full flex justify-around flex-col items-center'}>
                <Text>{name}</Text>
                <Text>{birthday}</Text>
            </View>
        </View>
    )
}