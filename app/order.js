import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useState } from "react";

import Header from "../components/header";
import OrderCard from "../components/cards/OrderCard";

const FirstRoute = () => (
  <SafeAreaView style={styles.menuContainer}>
    <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
      <OrderCard isPast={false} />
      <OrderCard isPast={false} />
      <OrderCard isPast={false} />
      <OrderCard isPast={false} />
    </ScrollView>
  </SafeAreaView>
);

const SecondRoute = () => (
  <SafeAreaView style={styles.menuContainer}>
    <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
      <OrderCard isPast={true} isCancelled={false} />
      <OrderCard isPast={true} isCancelled={true} />
    </ScrollView>
  </SafeAreaView>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Order = () => {
  // TabView Layout
  const layout = useWindowDimensions();

  // TabView Index State Manager
  const [index, setIndex] = useState(0);

  // Get current route name
  const params = useLocalSearchParams();

  // TabView Routes State Manager
  const [routes] = useState([
    { key: "first", title: "In Progress" },
    { key: "second", title: "Past Orders" },
  ]);

  // TabBar Renderer
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#020202" }}
      style={{
        backgroundColor: "#fff",
      }}
      activeColor='#020202'
      inactiveColor='#8D92A3'
    />
  );
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
      <TabView
        style={{ marginTop: 72 }}
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  menuContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
    flex: 1,
  },
  ScrollView: {
    flex: 1,
  },
});
