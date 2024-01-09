import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";
import { styles } from "./home.styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/food_market.png")}
      />
      {/* <StatusBar style='auto' /> */}
    </View>
  );
}
