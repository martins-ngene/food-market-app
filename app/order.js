import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";

const Order = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Text>Order</Text>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
