import { Link, Stack } from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "../components/buttons";
// import Home from "../screens/home";
import Input from "../components/input";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: "Sign In", // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      {/* <Home /> */}
      <View style={{ marginBottom: 16, width: "100%" }}>
        <Input label='Email Address' placeholder='Type your email address' />
      </View>
      <View style={{ marginBottom: 24, width: "100%" }}>
        <Input label='Password' placeholder='Type your password' />
      </View>
      <Button buttonType='normal'>
        <Link href={{ pathname: "signup", params: { name: "Sign Up" } }}>
          Sign in
        </Link>
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
