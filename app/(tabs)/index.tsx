import CoreCompo from "@/compo/CoreComponents";
import Greet from "@/compo/Greet";
import { View } from "react-native";
export default function App(){
  return (
    <View style={{flex:1,backgroundColor:"pink",padding:60}}>
  <Greet name="shubehndu"/>
  <Greet name="Satyanath"/>
    </View>
  )
}