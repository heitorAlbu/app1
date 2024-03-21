import React from 'react';
import { StyleSheet, Text } from 'react-native';
import estilos from '../estilos/estilos.tsx'

export default function (props: any) {
    let tamanho = props.tamanho
    let cor = props.cor;
    return (
        <Text style={estilos.textoMenu}>comida {props.ingrediente} R$ {props.preco} Tamanho={tamanho}</Text>
    )
}

