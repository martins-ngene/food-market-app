import { View, StyleSheet, Text, Image } from "react-native";
import { Stack, Link } from "expo-router";

import { Button } from "../components/buttons";
import { icons } from "../icons";
// import CompletedImage from "../assets/complete_signup.svg"
// import SuccessOrder from "../assets/success_order.svg"
import OrderEmpty from "../assets/order_empty.svg"

export default function Completed() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      {/* <Image style={styles.image} source={icons.completeSignUp} /> */}
      <OrderEmpty width={220} height={300} />
      <Text style={styles.header}>Yeay! Completed</Text>

      <Text style={styles.text}>
        Now you are able to order some foods as a self-reward
      </Text>

      <View style={styles.btnContainer}>
        <Button buttonType='normal'>
          <Link href={{ pathname: "tabs", params: { name: "Tabs" } }}>
            Find Foods
          </Link>
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
    marginTop: 10,
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
