import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Stack } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import Order from "./order";
import Profile from "./profile";
import Home from "./home";
import HomeIcon from "../assets/home.svg";
import ProfileIcon from "../assets/profile.svg";
import OrderIcon from "../assets/order.svg";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#EB0029",
          headerShown: false,
        }}
        backBehavior="order"
      >
        <Tab.Screen
          options={{
            tabBarShowLabel: true,
            tabBarIcon: () => <HomeIcon width={32} height={32} />,
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarShowLabel: true,
            tabBarIcon: () => <OrderIcon width={32} height={32} />,
          }}
          name="Order"
          component={Order}
        />
        <Tab.Screen
          options={{
            tabBarShowLabel: true,
            tabBarIcon: () => <ProfileIcon width={32} height={32} />,
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
