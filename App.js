import { View, StyleSheet } from "react-native";
import { Button } from "./components/buttons";
// import Home from "./screens/home";
import Input from "./components/input";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <View style={{ marginBottom: 16, width: "100%" }}>
        <Input label='Email Address' placeholder='Type your email address' />
      </View>
      <View style={{ marginBottom: 24, width: "100%" }}>
        <Input label='Password' placeholder='Type your password' />
      </View>
      <Button label='Sign in' buttonType='normal' />
    </View>
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
