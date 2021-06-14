import React from 'react';
import {Modal, Text, StyleSheet, View,Dimensions,Button} from 'react-native';

export default ({children, visibleModal}) =>{

    return(
        <Modal animationType='slide'
         visible ={visibleModal}
         transparent={true}>
         <View style={styles.general}>
            <View style={styles.puntual}>
                 {children}
                 
            </View>
         </View>
         </Modal>
    )
}

const styles = StyleSheet.create({
    general:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.3)',
        width:Dimensions.get('window').width,
        alignItems:'center',
        justifyContent:'center'
    },
    puntual:{
        backgroundColor:'#fff',
        borderRadius:4,
        shadowColor:'#eee',
        shadowOffset:{width:0, height:3},
        minWidth:Dimensions.get('window').width-200,
        padding:10,
        
    
        
    }

})