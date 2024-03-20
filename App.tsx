import { Component } from "react";
import { Text, View } from "react-native";
import Prato from "./components/prato"


export default class App1 extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>Cardápio QR Code</Text>
          <Text>Menu:</Text>
          <Prato></Prato>
        </View>
      </View>

    )
  }


}