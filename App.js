import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';
import { PanelSuperior, PanelInferior, PanelModal, InputApp } from './componentes';

export default function App() {
 const [visibilidadModal, setVisibilidadModal]=useState(false)

  return (
    <View style={styles.container}>
      <PanelSuperior/>
      <PanelModal visibleModal={visibilidadModal}>
       <InputApp/>
       <Button title ="Guardar" onPress={()=>{setVisibilidadModal(false)}}/>
       </PanelModal>
       <PanelInferior botonIngresar={()=>{setVisibilidadModal(true)}} botonMostrar={()=>{console.log('Mostrar')}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom:10,
    paddingTop:20
  },
 
});
