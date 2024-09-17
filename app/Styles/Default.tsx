import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#E8F783',
    },
    card: {
      width: 300,
      height: 200,
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 5, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.1, 
      shadowRadius: 4, 
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      marginVertical: 10
    },
    cardText: {
      fontSize: 18,
      color: '#333',
      fontWeight:"bold"
    },
    image:{
      width:100,
      height:100,
      objectFit:"contain",
      resizeMode:"contain"
    }
  });

  export default Style