import { Component } from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import Prato from "./components/prato"
import { StyleSheet } from "react-native";
import estilos from './estilos/estilos.tsx';
import Caixa from './components/caixa.tsx';
import Lista from './components/listaProduto.tsx';
// export default class App1 extends Component {
export default function App1() {
  const imgbg = './assets/background.jpg';
  // fexibir = (vp1: any) => {
  //   if (vp1) {
  //     return (<Text>APLICATIVO</Text>)
  //   } else {
  //     return (<Text> - - - -</Text>)
  //   }
  // }

  return (

    <View>
      <ImageBackground
        source={require(imgbg)}
      >
        <Caixa></Caixa>
        <View>
          <Text >Cardápio QR Code</Text>
          <Text>Menu:</Text>
          <Prato ingrediente="tomate" preco="1,00" tamanho="médio"></Prato>

          <Lista></Lista>
          <Image
            source={require('./assets/app1.png')}
          />
        </View>
      </ImageBackground>
    </View>
  );

  //}



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

  const estilos = StyleSheet.create({
    logo: {
      width: 250,
      resizeMode: 'contain'
    },
    imagemFundo: {
      flex: 1,
      resizeMode: "cover",
      width: "100%",
      padding: 10
    }
  })


}
