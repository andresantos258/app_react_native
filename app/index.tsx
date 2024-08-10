import { Text, View, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

export default function Index() {
  return (
    <View style={estilo.container}>

      <Text style = {estilo.text}>Hello World!</Text>

    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#aabbcc"
  },
    text: {
      color: "purple",
      fontSize: 30,
    },
});