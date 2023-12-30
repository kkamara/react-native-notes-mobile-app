import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native"
import { useState, } from "react"

export default function App() {
  const [value, setValue] = useState("")
  const [listOfNotes, setListOfNotes] = useState([])

  function handleOnChangeText(getEnteredText) {
    setValue(getEnteredText)
  }

  function handleOnPressButton() {
    setListOfNotes(currentNotes => [...currentNotes, value])
    setValue("")
  }

  return (
    <View style={{
      padding: 60,
      paddingHorizontal: 15,
      flex: 1,
    }}>
      <View style={styles.inputContainer}>
        <TextInput value={value} onChangeText={handleOnChangeText} style={styles.input} placeholder="Add your note here" />
        <Button onPress={handleOnPressButton} color={"#000"} title="Add note" />
      </View>
      <FlatList
        data={listOfNotes}
        renderItem={(itemData) => (
          <Text style={styles.listItem}>
            {itemData.item}
          </Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 30,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
  listContainer: {
    paddingTop: 30,
    flex: 3,
  },
  listItem: {
    borderRadius: 1,
    borderColor: "red",
    backgroundColor: "green",
    marginBottom: 20,
    color: "#fff",
    fontSize: 20,
  },
})