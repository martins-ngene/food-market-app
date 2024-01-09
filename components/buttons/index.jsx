import { Pressable, Text, View } from "react-native";
import { styles } from "./buttons.styles";

export const Button = ({ buttonType, label }) => {
  if (buttonType === "normal") {
    return (
      <View style={styles.container}>
        <Pressable>
          <Text style={styles.text}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  if (buttonType === "icon") {
    return (
      <View style={styles.container}>
        <Pressable style={styles.text}>{label}</Pressable>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.text}>{label}</Pressable>
    </View>
  );
};
