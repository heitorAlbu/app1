import { Component } from "react";
import { Text, View } from "react-native";
import Prato from "./components/prato"
import { StyleSheet } from "react-native";
import estilos from './estilos/estilos.tsx';
export default class App1 extends Component {
  render() {
    return (
      <View style={estilos.conteiner}>
        <View>
          <Text style={estilos.textoTitulo}>Cardápio QR Code</Text>
          <Text>Menu:</Text>
          <Prato ingrediente="tomate" preco="1,00" tamanho="médio"></Prato>
        </View>
      </View>

    );
  };
}
// const estilos = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ddd',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   txt1: {
//     color: '#080',
//     fontSize: 20,
//   },

// })