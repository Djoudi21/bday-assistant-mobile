import React from "react";
import {SafeAreaView, View, StyleSheet, Dimensions, Text, TouchableOpacity} from "react-native";
import {useAssets} from "expo-asset";
import {ResizeMode, Video} from "expo-av";
import { Link } from "expo-router";
const { width, height } = Dimensions.get('window');

export default function Page() {
    const [assets] = useAssets([require('@/assets/videos/intro.mp4'), require('@/assets/images/playstore.png')])
  return (
      <SafeAreaView className={'flex flex-1 justify-between'}>
          {assets && <Video  resizeMode={ResizeMode.COVER} shouldPlay={true} isMuted={true} isLooping={true} source={{uri: assets[0].uri}} style={style.video} />}
          <Text className={'text-white font-bold text-3xl uppercase m-10'}>N'oubliez plus aucun anniversaire</Text>

          <View className={'flex flex-row justify-around items-center pb-10'}>
              <Link href={'/login'} asChild>
                  <TouchableOpacity className={'bg-black w-1/3 h-12 p-2 flex items-center justify-center rounded-3xl'}>
                      <Text className={'text-white font-bold text-xl'}>Login</Text>
                  </TouchableOpacity>
              </Link>
              <Link href={'/register'} asChild>
                  <TouchableOpacity className={'bg-white w-1/3 h-12 p-2 flex items-center justify-center rounded-3xl'}>
                      <Text className={'text-black font-bold text-xl'}>Sign up</Text>
                  </TouchableOpacity>
              </Link>
          </View>
      </SafeAreaView>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    video: {
        height: height,
        width: width,
        position: 'absolute',
    }
})
