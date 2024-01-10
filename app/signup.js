import { View, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams, Link } from "expo-router";
import { Button } from "../components/buttons";
import Input from "../components/input";

export default function Details() {
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: params.name,
        }}
      />
      <View style={{ marginBottom: 16, width: "100%" }}>
        <Input label='Full Name' placeholder='Type your full name' />
      </View>
      <View style={{ marginBottom: 16, width: "100%" }}>
        <Input label='Email Address' placeholder='Type your email address' />
      </View>
      <View style={{ marginBottom: 24, width: "100%" }}>
        <Input label='Password' placeholder='Type your password' />
      </View>
      <Button buttonType='normal'>
        {/* <Link href={{ pathname: "signup", params: { name: "Sign Up" } }}> */}
        Continue
        {/* </Link> */}
      </Button>
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
  },
});
