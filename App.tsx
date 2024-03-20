import { Component } from "react";
import { Text, View } from "react-native";
import Prato from "./components/prato"
import { StyleSheet } from "react-native";

export default class App1 extends Component {
  render() {
    return (
      <View style={estilos.container}>
        <View>
          <Text style={estilos.txt1}>Cardápio QR Code</Text>
          <Text>Menu:</Text>
          <Prato></Prato>
        </View>
      </View>

    );
  };
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt1: {
    color: '#080',
    fontSize: 20,
  },

})