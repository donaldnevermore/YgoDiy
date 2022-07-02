import React, { FC } from "react"

import { InputSelector } from "./InputSelector"

export const MonsterDetailSelector: FC<any> = () => {
    const list = [{ name: "通常" }, { name: "效果" }]

    const handlePress1 = (item: any) => {
        console.log(item)
    }

    const handlePress2 = (item: any) => {
        console.log(item)
    }

    return (
        <>
            <InputSelector list={list} handlePress={handlePress1} />
            <InputSelector list={list} handlePress={handlePress2} />
        </>
    )
}
