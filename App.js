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
      <TextInput placeholder="Add your note here"/>
      <Button title="Add note" />
    </View>
  )
}

const styles = StyleSheet.create({

})