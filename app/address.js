import { View, StyleSheet, Text } from "react-native";
import { Stack, useLocalSearchParams, Link } from "expo-router";

import { Button } from "../components/buttons";
import Input from "../components/input";

export default function SignUp() {
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: params.name,
        }}
      />

      <View style={{ marginBottom: 16, width: "100%" }}>
        <Input label='Phone No.' placeholder='Type your phone number' />
      </View>
      <View style={{ marginBottom: 16, width: "100%" }}>
        <Input label='Address' placeholder='Type your address' />
      </View>
      <View style={{ marginBottom: 16, width: "100%" }}>
        <Input label='House No.' placeholder='Type your house number' />
      </View>
      <View style={{ marginBottom: 24, width: "100%" }}>
        <Input label='City' placeholder='Select your city' />
      </View>
      <Button buttonType='normal'>
        <Link href={{ pathname: "completed" }}>Sign Up Now</Link>
      </Button>
      <Text style={styles.createAccount}>
        <Text style={{ color: "#575757", fontWeight: "400" }}>
          {" "}
          I Already Have an Account
        </Text>
        {"  "}
        <Link
          style={{ color: "#EB0029", fontWeight: "600" }}
          href={{ pathname: "signup", params: { name: "Sign Up" } }}>
          Log in
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  createAccount: {
    marginTop: 16,
    fontSize: 14,
    fontStyle: "normal",
  },
});
