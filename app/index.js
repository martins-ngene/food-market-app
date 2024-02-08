import { Link, Stack } from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

import { Button } from "../components/buttons";
import Input from "../components/input";
import { icons } from "../icons";
import Header from "../components/header";

export default function SignIn() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Header
              headerText='Sign In'
              subText='Find your best ever meal'
              isBackBtn={false}
            />
          ),
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

      <Link
        style={styles.forgotPassWord}
        href={{ pathname: "signup", params: { name: "Sign Up" } }}>
        Forgot Password
      </Link>
      <Text style={styles.continueText}>- OR Continue with -</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: 280,
          marginBottom: 24,
        }}>
        <Button buttonType='icon' image={icons.googleImage}>
          Google
        </Button>
        <Button buttonType='icon' image={icons.facebookImage}>
          Facebook
        </Button>
      </View>
      <Text style={styles.createAccount}>
        <Text
          style={{
            color: "#575757",
            fontWeight: "400",
            fontFamily: "Poppins_400Regular",
          }}>
          {" "}
          Create An Account
        </Text>
        {"  "}
        <Link
          style={{
            color: "#EB0029",
            fontWeight: "600",
            fontFamily: "Poppins_400Regular",
          }}
          href={{ pathname: "signup", params: { name: "Sign Up" } }}>
          Sign Up
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
    paddingTop: 82,
    paddingHorizontal: 24,
    fontFamily: "Poppins_400Regular",
  },
  forgotPassWord: {
    color: "#EB0029",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    textDecorationLine: "underline",
    marginTop: 12,
    marginBottom: 24,
    fontFamily: "Poppins_400Regular",
  },
  continueText: {
    color: "#575757",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "300",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },
  createAccount: {
    fontSize: 14,
    fontStyle: "normal",
  },
});
