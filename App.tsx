import { useState } from "react";
import { Text, View, Image, ImageBackground, Button } from "react-native";
import Prato from "./components/prato"
import { StyleSheet } from "react-native";
import estilos from './estilos/estilos.tsx';
import Caixa from './components/caixa.tsx';
import Lista from './components/listaProduto.tsx';
import Mesa from './components/mesa.tsx';




export default function App1() {
  const [ligado, setLigado] = useState(true);
  const imgbg = './assets/background.jpg';


  const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ddd',
      alignItems: 'center',
      justifyContent: 'center'
    },
    txt1: {
      color: '#080',
      fontSize: 20,
    },
    logo: {
      width: 250,
      resizeMode: 'contain'
    },
    imagemFundo: {
      flex: 1,
      resizeMode: "cover",
      width: "100%",
      padding: 10
    },
    txtState: {
      fontSize: 30
    }
  })

  return (

    <View style={estilos.container}>
      <Mesa nome="mesa1" />
      {/* <Button
        title={ligado ? "Desligar" : "Ligar"}
        onPress={() => setLigado(!ligado)}

      /> */}



      {/* <ImageBackground
        source={require(imgbg)}
      >
        <Caixa></Caixa>
        <View>
          <Text >Cardápio QR Code</Text>
          <Text>Menu:</Text>
          <Prato ingrediente="tomate" preco="1,00" tamanho="médio"></Prato>
          <Text style={estilos.txtState}> * * * *</Text>
          <Lista></Lista>
          <Image
            source={require('./assets/app1.png')}
          />
        </View>
      </ImageBackground> */}
    </View>
  );
}
