import { View, StyleSheet, Text, Image } from "react-native";
import { Stack, useLocalSearchParams, Link } from "expo-router";

import { Button } from "../components/buttons";
import { icons } from "../icons";

export default function SignUp() {
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: params.name,
        }}
      />
      <Image style={styles.image} source={icons.completeSignUp} />

      <Text style={styles.header}>Yeay! Completed</Text>

      <Text style={styles.text}>
        Now you are able to order some foods as a self-reward
      </Text>

      <View style={styles.btnContainer}>
        <Button buttonType='normal'>
          {/* <Link href={{ pathname: "signup", params: { name: "Sign Up" } }}> */}
          Find Foods
          {/* </Link> */}
        </Button>
      </View>
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
  createAccount: {
    marginTop: 16,
    fontSize: 14,
    fontStyle: "normal",
  },
  btnContainer: {
    width: 200,
  },
  image: {
    width: 200,
    height: 290,
  },
  header: {
    marginTop: 30,
    color: "#020202",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    fontFamily: "Poppins_400Regular",
  },
  text: {
    marginBottom: 30,
    color: "#8D92A3",
    textAlign: "center",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "300",
    fontFamily: "Poppins_400Regular",
  },
});
