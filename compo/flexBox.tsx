import {Text,View,StyleSheet} from "react-native";
export default function Box(){
    return(
        <View style={style.container}>
            <Text>This is the text</Text>
        </View>
    )
}


export const style = StyleSheet.create({
    container:{
        height:500,
        width:300,
        margin:30,
        padding:10,
        backgroundColor:"pink",
        borderWidth:1,
        borderColor:"black",
        borderStyle:"solid",
        borderRadius:10,
        shadowColor:"#333333",
        shadowRadius:4,
        shadowOpacity:1,
        shadowOffset:{
            height:30,
            width:30,
        },
        elevation:10
        
    }
})