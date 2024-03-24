import React from 'react';
import { View, Text, FlatList } from 'react-native';

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
                renderItem={({ item }) => <Text> Descrição: {item.desc[0]} - Valor:{item.desc[1]}</Text>}
            />
        </View>
    )
}