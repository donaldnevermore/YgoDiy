import React, { useState, FC, useRef } from "react"
import { Text, View, ActivityIndicator } from "react-native"
import { ButtonGroup, Input, Switch, Image, Button } from "@rneui/themed"
import { WebView } from "react-native-webview"

import { LanguageSelector } from "./LanguageSelector"
import { MonsterDetailSelector } from "./MonsterDetailSelector"

export const Form = () => {
    const [data, setData] = useState({
        name: "浮幽櫻", // card name
        _id: "62015408", // card id
        type: "monster", // first type
        type2: "xg", // secend type 见下面注释①
        type3: "", // third type
        type4: "", // fourth type
        desc: "這個卡名的效果1回合只能使用1次。①：對方場上的怪獸數量比自己場上的怪獸多的場合，把這張卡從手卡丟棄才能發動。選自己的額外卡組1張卡給雙方確認。那之後，把對方的額外卡組確認，有選的卡的同名卡的場合，那些對方的同名卡全部除外。這個效果在對方回合也能發動。", // card describe
        attribute: "dark",
        // monster attribute
        race: "不死族", // monster race
        attack: 0, // monster attack
        defend: 1800, // monster defend
        level: 3, // monster level

        link: [], // link monster arrows
        lb_desc: "", // pendulum describe
        lb_number: 0 // pendulum number
    })

    const handleCardName = (value: string) => {
        console.log(value)
    }

    const [selectedColor, setSelectedColor] = useState(0)
    const [selectedCardType, setSelectedCardType] = useState(0)
    const [selectedAttribute, setSelectedAttribute] = useState(0)
    const [checked, setChecked] = useState(false)

    const handleCardCode = (value: string) => {
        console.log(value)
    }

    const handleLevel = (value: string) => {
        console.log(value)
    }

    return (
        <View>
            <Text>语言</Text>
            <LanguageSelector />

            <Text>卡名</Text>
            <Input defaultValue="浮幽櫻" onChangeText={handleCardName} />

            <Text>卡名颜色</Text>
            <ButtonGroup
                buttons={["黑色", "白色", "金色", "红色"]}
                selectedIndex={selectedColor}
                onPress={(value) => {
                    setSelectedColor(value)
                }}
            />

            <Text>密码</Text>
            <Input defaultValue="62015408" onChangeText={handleCardCode} />

            <Text>卡图</Text>
            <Text>选择图片</Text>
            <Text>直接使用图片（不裁剪）</Text>

            <Text>卡片类型</Text>
            <ButtonGroup
                buttons={["怪兽卡", "魔法卡", "陷阱卡"]}
                selectedIndex={selectedCardType}
                onPress={(value) => {
                    setSelectedCardType(value)
                }}
            />

            <Text>详细</Text>
            <MonsterDetailSelector />

            <Text>属性</Text>
            <ButtonGroup
                buttons={"光 暗 风 水 炎 地 神".split(" ")}
                selectedIndex={selectedAttribute}
                onPress={(value) => {
                    setSelectedAttribute(value)
                }}
            />

            <Text>等级</Text>
            <Input defaultValue="0" onChangeText={handleLevel} />

            <Text>种族</Text>
            <Input defaultValue="0" onChangeText={handleLevel} />

            <Text>攻击 / 防御</Text>
            <Input defaultValue="0" onChangeText={handleLevel} />
            <Input defaultValue="0" onChangeText={handleLevel} />

            <Text>效果</Text>
            <Input defaultValue="0" onChangeText={handleLevel} />

            <Text>版权文字</Text>
            <Input defaultValue="0" onChangeText={handleLevel} />

            <Text>偏好</Text>
            <Switch value={checked} onValueChange={(value: any) => setChecked(value)} />

            <Button
                title="保存图片"
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10
                }}
            />
        </View>
    )
}
