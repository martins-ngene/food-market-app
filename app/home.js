import { Stack } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { icons } from "../icons";
import ProductCard from "../components/cards/ProductCard";
import MenuCard from "../components/cards/MenuCard";

const FirstRoute = () => (
  <SafeAreaView style={styles.menuContainer}>
    <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
      <MenuCard />
      <MenuCard />
      <MenuCard />
    </ScrollView>
  </SafeAreaView>
);

const SecondRoute = () => (
  <SafeAreaView style={styles.menuContainer}>
    <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
      <MenuCard />
      <MenuCard />
      <MenuCard />
    </ScrollView>
  </SafeAreaView>
);

const ThirdRoute = () => (
  <SafeAreaView style={styles.menuContainer}>
    <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
      <MenuCard />
      <MenuCard />
      <MenuCard />
    </ScrollView>
  </SafeAreaView>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const Home = () => {
  // TabView Layout
  const layout = useWindowDimensions();

  // TabView Index State Manager
  const [index, setIndex] = useState(0);

  // TabView Routes State Manager
  const [routes] = useState([
    { key: "first", title: "New Taste" },
    { key: "second", title: "Popular" },
    { key: "third", title: "Recommended" },
  ]);

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
          headerShown: false,
        }}
      />
      <View style={styles.itemsContainer}>
        <View>
          <Text style={styles.header}>FoodMarket</Text>
          <Text style={styles.text}>Let's get some foods</Text>
        </View>
        <View>
          <Image style={styles.image} source={icons.avatar} />
        </View>
      </View>
      <SafeAreaView style={styles.cardContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ScrollView>
      </SafeAreaView>
      {/* <View style={styles.tabViewContainer}> */}
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      {/* </View> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  header: {
    color: "#020202",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "medium",
    fontFamily: "Poppins_400Regular",
  },
  text: {
    color: "#8D92A3",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "medium",
    fontFamily: "Poppins_400Regular",
  },
  itemsContainer: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },

  cardContainer: {
    marginLeft: 24,
    marginTop: 78,
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  menuContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
    flex: 1,
  },
  ScrollView: {
    flex: 1,
  },
  tabViewContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
  },
});
