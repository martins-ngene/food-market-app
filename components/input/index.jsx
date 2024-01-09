import { StyleSheet, Text, TextInput, View } from "react-native";
import { styles } from "./input.styles";

const Input = ({ label, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default Input;
