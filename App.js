import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from "react-native"

export default function App() {
  return (
    <View style={{
      padding: 60,
    }}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Add your note here"/>
        <Button color={"#000"} title="Add note" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  }
})