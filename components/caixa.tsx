import React from 'react';
import { View } from 'react-native';

export default function (props: any) {
    return (
        <View style={{ width: '100%', flexDirection: 'row', height: 300, alignItems: 'center'/*cross axis*/, justifyContent: 'space-between' /*main axis*/ }}>
            <View style={{ width: 50, height: 50, backgroundColor: '#00f' }}></View>
            <View style={{ width: 50, height: 50, backgroundColor: '#00a' }}></View>
            <View style={{ width: 50, height: 50, backgroundColor: '#005' }}></View>
        </View>
    )
}