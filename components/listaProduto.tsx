import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const produtos = [
    {
        id: '001',
        desc: ['Presunto', '1.00']
    },
    {
        id: '002',
        desc: ['Mortadela', '2.00']
    },
    {
        id: '003',
        desc: ['Pão', '0.50']
    }
]

export default function () {
    return (
        <View>
            <FlatList
                data={produtos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Text style={estilos.item}> Descrição: {item.desc[0]} - Valor:{item.desc[1]}</Text>}

            />
        </View>
    )


}

const estilos = StyleSheet.create({
    item: {
        backgroundColor: '#008',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 20,
        color: '#fff'
    }
})