import React from 'react';
import { TextInput, StyleSheet, View, FlatList, Text, Dimensions } from 'react-native';

export default () =>{
    return (
        <View style={styles.lista}>
        <TextInput style={styles.input} placeholder='Nombre'/>
        <TextInput style={styles.input} placeholder='Apellidos'/>
        <TextInput style={styles.input} placeholder='Edad'/>
        <FlatList data ={[{key:'0', rol:'Estudiante'}, {key:'1', rol:'Profesor'}, {key:'2', rol:'Directivo'}, {key:'3', rol:'Familiar'}]}
         renderItem={({item})=><Text>{item.rol}</Text>} />
         {/* keyExtractor={item=>item}/>  */}
        </View>
    )


}

const styles = StyleSheet.create({
input:{
    borderWidth:1,
    borderRadius:5,
    padding:5, 
    marginTop:10,
    marginBottom:10
    
},
item:{
    borderBottomWidth:1,
    borderColor:'#ccc',
    height: 50,
    justifyContent:'center',
    padding:15
},
lista:{
    height:Dimensions.get('window').height-250
}
})