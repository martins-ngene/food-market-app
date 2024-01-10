import { Pressable, Text, View } from "react-native";
import { styles } from "./buttons.styles";

export const Button = ({ buttonType, children }) => {
  if (buttonType === "normal") {
    return (
      <View style={styles.container}>
        <Pressable>
          <Text style={styles.text}>{children}</Text>
        </Pressable>
      </View>
    );
  }
  if (buttonType === "icon") {
    return (
      <View style={styles.container}>
        <Pressable style={styles.text}>{children}</Pressable>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.text}>{children}</Pressable>
    </View>
  );
};
