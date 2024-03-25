import { Component } from "react";
import { Button, Text, View, SafeAreaView } from "react-native";

export default class Mesa extends Component {
    state = {
        ligado: true
    }

    render() {
        return (
            <View>
                <Text>Mesa:  - Ativa :{this.state.ligado ? 'Sim:' : 'Não'}</Text>
                <Button
                    title={this.state.ligado ? 'Desligar' : 'Ligar'}
                    onPress={
                        () => { this.setState({ ligado: !this.state.ligado }) }
                    }
                />
            </View>
        )

    }
}