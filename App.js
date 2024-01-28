import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Button } from "./components/buttons";
import Input from "./components/input";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={{ marginBottom: 16, width: "100%" }}>
          <Input label='Email Address' placeholder='Type your email address' />
        </View>
        <View style={{ marginBottom: 24, width: "100%" }}>
          <Input label='Password' placeholder='Type your password' />
        </View>
        <Button label='Sign in' buttonType='normal' />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    fontFamily: "Poppins_400Regular",
  },
});
