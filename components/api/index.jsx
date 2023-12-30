import { useEffect, useState } from "react"
import { View, Text, FlatList, } from "react-native"

export default function Api() {
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        async function getDataFromApi() {
            const apiResponse = await fetch('https://dummyjson.com/users')
            const finalData = await apiResponse.json()

            if (finalData) {
                setApiData(finalData.users.map(
                    userItem => `${userItem.firstName} ${userItem.lastName} ${userItem.age}`
                ))
            }
        }

        getDataFromApi()
    }, [])

    console.log(apiData)

    return (
        <View>
            <Text>API Data</Text>

            <View>
                <FlatList
                    data={apiData}
                    renderItem={(itemData) => <Text>
                        {itemData.item}
                    </Text>}
                />
            </View>
        </View>
    )
}