import { Stack } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { icons } from "../icons";
import ProductCard from "../components/cards/ProductCard";
import MenuCard from "../components/cards/MenuCard";

const Home = () => {
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
      <SafeAreaView style={styles.menuContainer}>
        <ScrollView
          style={styles.ScrollView}
          showsVerticalScrollIndicator={false}>
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </ScrollView>
      </SafeAreaView>
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
});
