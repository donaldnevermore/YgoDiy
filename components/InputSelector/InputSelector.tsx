import React, { useState } from "react"
import { Text, View, StyleSheet } from "react-native"
import { ListItem } from "@rneui/themed"

type Props = {
    label: string
    list: any[]
    handlePress: (event: any) => void
}

const InputSelector: React.FC<Props> = ({ label, list, handlePress }) => {
    const [value, setValue] = useState("xyz")
    const [expanded, setExpanded] = useState(false)

    const press = (event: any) => {
        handlePress(event)
    }

    return (
        <View>
            <Text>{label}</Text>
            <ListItem.Accordion
                content={
                    <>
                        <ListItem.Content>
                            <ListItem.Title>{value}</ListItem.Title>
                        </ListItem.Content>
                    </>
                }
                isExpanded={expanded}
                onPress={() => {
                    setExpanded(!expanded)
                }}>
                {list.map((l, i) => (
                    <ListItem key={i} onPress={press} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </ListItem.Accordion>
        </View>
    )
}
