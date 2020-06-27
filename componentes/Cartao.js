import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';


const Cartao = (props) => {

    return (
        <View style={{ ...estilos.cartao, ...props.estilos }}>
            {props.children}
        </View>
    );
}

const estilos = StyleSheet.create({
    cartao: {
        alignItems: 'center',
        elevation: 4,
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 12
    }
})

export default Cartao;