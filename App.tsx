import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Comp from "./src/Primeiro";


function App() {
    return(
      <View style = {style.container}>
        <Text style = {style.txtG}>Mobile Enzo</Text>
        <Comp></Comp>
      </View>
    ) 
}

const style = StyleSheet.create({
  container:{
    flexGrow:1,
    backgroundColor:"#A00",
    justifyContent:"center",
    alignItems:"center"
  },

txtG:{
  fontSize:30
}
})



export default App;