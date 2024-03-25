import { useState } from "react";
import { Switch, Text, View } from "react-native";

export default function (props: any) {
    const [ligado, setLigado] = useState(false)
    const toggleLigado = () => setLigado(!ligado)

    return (
        <View>
            <Text>
                <Switch
                    trackColor={{ false: '#777', true: '#8bf' }}
                    thumbColor={ligado ? '#00f' : '#444'}
                    value={ligado}
                    onValueChange={toggleLigado}
                />


            </Text>


        </View>



    )



}