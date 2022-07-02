import React, { FC } from "react"

import { InputSelector } from "./InputSelector"

export const LanguageSelector: FC<any> = () => {
    const list = [{ name: "繁體中文" }]

    const handlePress = (item: any) => {
        console.log(item)
    }

    return <InputSelector list={list} handlePress={handlePress} />
}
