import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function (props: any) {
    let tamanho = props.tamanho
    let cor = props.cor;
    return (
        <Text style={estilos.txt2, { color: cor }}>comida {props.ingrediente} R$ {props.preco} Tamanho={tamanho}</Text>
    )

}

const estilos = StyleSheet.create({
    txt1: {
        //color: '#f00',
        fontSize: 20,
    },
    txt2: {
        //color: '#00f',
        fontSize: 15,
    }
})