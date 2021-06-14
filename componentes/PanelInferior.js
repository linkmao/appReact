import React, { useState} from 'react';
import {View, StyleSheet, Text, Dimensions, Pressable} from 'react-native';

export default ({botonIngresar, botonMostrar})=>{





    return(
        <View style={styles.panel}>
            {/* <Pressable style={styles.boton} onPress ={()=>{console.log('Se presionó 1')}}> <Text>Ingresar informacion</Text></Pressable> */}
            <Pressable style={styles.boton1} onPress={botonIngresar} ><Text style={{color:'white'}}>Ingresar información</Text></Pressable>
            <Pressable style={styles.boton2} onPress = {botonMostrar}><Text style={{color:'white'}}>Mostrar información</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
panel:{
    backgroundColor: '#C8C6EC',
    width: Dimensions.get('window').width,
    height: 130,
    alignItems:'center',
    justifyContent:'space-evenly'
},
boton1: {
    borderRadius:20,
    backgroundColor:'#E708CC',
    elevation:10,
    padding:10
},

boton2: {
    borderRadius:20,
    backgroundColor:'#611EF9',
    elevation:10,
    padding:10
}

})