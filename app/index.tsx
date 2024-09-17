import { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { useAnimatedKeyboard } from "react-native-reanimated";
import ListaProdutos from "@/Componentes/Adaptadores/ListaProdutos";
import { useEffect } from "react";
import Style from "./Styles/Default";
import axios from "axios";
import { useRouter,useFocusEffect } from "expo-router";

// const produto = [
//   {id: 1, nome: "Coca-Cola", preco: 10.5, img: "\u{1F964}"},
//   {id: 2, nome: "Pepsi", preco: 9.5, img: "\u{1F964}"},
//   {id: 3, nome: "Fanta", preco: 8.5, img: "\u{1F964}"},
//   {id: 4, nome: "Dolly", preco: 6.5, img: "\u{1F964}"}
// ]

//const gradientColors = ['navy', 'blue', 'cyan'];

export default function Index() {
  const router = useRouter();  
  useFocusEffect(()=>{
    carregarProdutos();

  })


 let[produtos,setProdutos]=useState([]);

 useEffect(()=>{
  carregarProdutos();
},[]);

function carregarProdutos(){
  axios.get('https://api-docker-2t8m.onrender.com/api/produtos')
    .then((resp)=>{
      setProdutos(resp.data);
    })

}

  return (
    <View
      style={Style.container}
      >
      <ListaProdutos produtos={produtos}aoAtualizar={carregarProdutos}></ListaProdutos>

      <Button title='Cadastrar' onPress={()=>{telaCadastro()}}></Button>


    </View>
  );
  function telaCadastro(){
    router.push('/Telas/cadastro');
    
  }
  
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "white",
    marginBottom: 20,
    

  },
  text: {
    color: "black",
    fontSize: 25,
    fontFamily: "sanserifa",
    marginBottom: 10,
    textAlign: "left",

  },

  titulo:{
    color: "black",
    fontSize: 30,
    fontFamily: "sanserifa",
    marginBottom: 10,
    textAlign: "left",
    fontWeight: "bold",
    textTransform: "uppercase",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
  }

});
