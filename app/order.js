import { StyleSheet, Text, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

import Header from "../components/header";

const Order = () => {
  const params = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: params.name,
          headerTitle: () => (
            <Header
              onPress={() => navigation.goBack()}
              headerText='Your Orders'
              subText='Wait for the best meal'
              isBackBtn={false}
            />
          ),
        }}
      />
      {/* <Text>Order</Text> */}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
