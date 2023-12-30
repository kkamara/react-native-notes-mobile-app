import { useEffect, useState } from "react"
import { View, Text, FlatList, ActivityIndicator, } from "react-native"

export default function Api() {
    const [loading, setLoading] = useState(false)
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        setLoading(true)
        async function getDataFromApi() {
            const apiResponse = await fetch('https://dummyjson.com/users')
            const finalData = await apiResponse.json()

            if (finalData) {
                setApiData(finalData.users.map(
                    userItem => `${userItem.firstName} ${userItem.lastName} ${userItem.age}`
                ))
                setLoading(false)
            }
        }

        getDataFromApi()
    }, [])

    console.log(apiData)

    if (loading) {
        return <ActivityIndicator
            color={'red'}
            size="large"
        />
    }

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