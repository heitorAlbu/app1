import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function () {
    const [nome, setNome] = useState("heitor");
    const mudarNome = () => { }
    return (
        <View>
            <Text>Digite O seu nome:</Text>
            <TextInput
                style={{ borderWidth: 1, borderColor: '#000' }}
                value={nome}
                onChangeText={text => setNome(text)}
            >

            </TextInput>

            <Text>{nome}</Text>
        </View>


    )


}