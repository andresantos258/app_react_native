import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useAnimatedKeyboard } from "react-native-reanimated";

const produto = [
  {id: 1, nome: "Cola-Cola", preco: 5.5 },
  {id: 2, nome: "Pepsi", preco: 5.5 },
  {id: 3, nome: "Fanta", preco: 5.5 },
  {id: 4, nome: "Guaraná", preco: 5.5 }
];



export default function Index() {

let [contador, setContador] = useState(0)
let [fuga, setFuga] = useState(0)

  return (
    <View style={estilo.container}>

      {produto.map((p) => (
        <View key={p.id}>

        <Text style={estilo.text}>{p.nome} </Text>
        <Text>{p.preco}</Text>

        </View>)
      )}
      
    <Button title={contador.toString()} onPress={()=>clicarBotao()}></Button>

    </View>
  );

  function clicarBotao(){
    setContador(contador+1);
  }

  

 }



const estilo = StyleSheet.create({
  container: {
    flex:1,
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#aabbcc",
      paddingStart: 20
  },
    text: {
      color: "purple",
      fontSize: 30,
    },
    titulo: {
      color: "#FFFFFF",
      fontSize: 30,
      textAlign: "center"
    }
});