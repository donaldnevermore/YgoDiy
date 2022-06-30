import React from "react"
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from "react-native"
import { Input } from "@rneui/themed"

const Form = () => {
    const handleCardName = (text: string) => {
        console.log(text)
    }

    return (
        <View>
            <Text>卡名</Text>
            <Input placeholder="浮幽櫻" onChangeText={handleCardName} />

            <Text>卡名颜色</Text>
        </View>
    )
}
