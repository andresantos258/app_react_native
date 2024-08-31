import { StyleSheet } from "react-native"

const Style = StyleSheet.create({
    
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'grey',
        },
        card: {
        //   width: 200,
        //   height: 150,
          backgroundColor: 'navy',
          borderRadius: 10,
          elevation: 5, // Para Android
          shadowColor: '#000', // Para iOS
          shadowOffset: { width: 0, height: 2 }, // Para iOS
          shadowOpacity: 0.1, // Para iOS
          shadowRadius: 4, // Para iOS
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          marginVertical: 5,
          alignSelf: 'stretch'
        },
        cardText: {
        //   fontSize: 18,
        //   color: 'white',
          color: "white",
          fontSize: 15,
          fontWeight: "bold",
        },
      
})

export default Style