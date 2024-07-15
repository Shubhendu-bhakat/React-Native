import { View,Text,StyleSheet} from "react-native";
export default function Style(){
    return(
        <View style={StyleCode.container} >
            <Text style={StyleCode.para}>View text </Text>
        </View>
    )
}
//if we will not use export we can,t use it in diffrent files but now due to export we can use it across diffrent file
export const StyleCode = StyleSheet.create({
    container:{flex:1, backgroundColor:"white" , padding:60 },
    para :{fontSize:40 ,color:"black"}
})