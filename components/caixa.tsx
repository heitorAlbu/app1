import React from 'react';
import { View } from 'react-native';

export default function (props: any) {
    return (
        // <View style={{ width: '100%', flexDirection: 'row', height: 300, alignItems: 'center'/*cross axis*/, justifyContent: 'space-between' /*main axis*/ }}>
        //     <View style={{ width: 50, height: 50, backgroundColor: '#00f' }}></View>
        //     <View style={{ width: 50, height: 50, backgroundColor: '#00a' }}></View>
        //     <View style={{ width: 50, height: 50, backgroundColor: '#005' }}></View>
        // </View>

        // <View style={{ width: '100%', flexDirection: 'column', height: 300, alignItems: 'stretch'/*esticou pq definiou o flex direction como column*/, justifyContent: 'center' /*main axis*/ }}>
        //     <View style={{ height: 50, backgroundColor: '#00f' }}></View>
        //     <View style={{ height: 50, backgroundColor: '#00a' }}></View>
        //     <View style={{ height: 50, backgroundColor: '#005' }}></View>
        // </View>

        // <View style={{ width: '100%', height: 300, flexDirection: 'row', flexWrap: 'wrap' }}>
        //     <View style={{ width: 85, height: 50, backgroundColor: '#00f' }}></View>
        //     <View style={{ width: 85, height: 50, backgroundColor: '#00a' }}></View>
        //     <View style={{ width: 85, height: 50, backgroundColor: '#005' }}></View>
        //     <View style={{ width: 85, height: 50, backgroundColor: '#f00' }}></View>
        //     <View style={{ width: 85, height: 50, backgroundColor: '#a00' }}></View>
        //     <View style={{ width: 85, height: 50, backgroundColor: '#500' }}></View>
        // </View>

        <View style={{ width: '100%', height: 300, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch' }}>
            <View style={{ flexGrow: 1, backgroundColor: '#00f' }}></View>
            <View style={{ flexGrow: 1, backgroundColor: '#00a' }}></View>
            <View style={{ flexGrow: 3, backgroundColor: '#005' }}></View>
            <View style={{ flexGrow: 3, backgroundColor: '#f00' }}></View>
            <View style={{ flexGrow: 1, backgroundColor: '#a00' }}></View>
            <View style={{ flexGrow: 1, backgroundColor: '#500' }}></View>
        </View>
    )
}