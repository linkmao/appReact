import React, {useState} from 'react';
import { Text, StyleSheet, View, Dimensions, TextInput } from "react-native";



export default ()=>{


    const [titulo, setTitulo]=useState('Hola, soy editable')

    const cambiarTitulo = (t) =>{
      setTitulo(t)
    }
  
    return (
    
        <View style ={styles.panel}>
             <Text style={styles.letra}>{titulo}</Text>
             <TextInput title="Cambiar titulo"
                 placeholder ="Cambiar texto en caliente"
                 onChangeText ={setTitulo}
                 style={styles.input}
              />
        </View>
        
    )
}

const styles = StyleSheet.create({
    panel:{
        backgroundColor:'#C8C6EC',
        width: Dimensions.get('window').width,
        height:100,
        alignItems:'center',
        justifyContent:'center'
        
    },
    letra:{
        color:'#0800EF',
        fontSize:30,
        
    },
    input:{
        borderBottomWidth:2,
        borderColor:'#FC5DC2'  
   
      }

})