import { View, Text } from "react-native";

export default function Greet({name}) {
  return (
    <View>
      <Text>Hi,{name}</Text>
    </View>
  );
}
