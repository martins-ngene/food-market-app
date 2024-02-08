import { Stack } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";
import { icons } from "../icons";
import StarRating from "react-native-star-rating-widget";
import { useState } from "react";

const Home = () => {
  const [rating, setRating] = useState(0);
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
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.shadowProp]}>
          <Image style={styles.cardImg} source={icons.card} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardHeader}>Cherry Healthy</Text>
            <StarRating
              rating={rating}
              onChange={setRating}
              color='#EB0029'
              starSize={16}
            />
          </View>
        </View>
      </View>
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
  },
  card: {
    width: 200,
    height: 210,
    borderRadius: 8,
    // borderColor: "#000",
    // borderWidth: 1,
  },
  shadowProp: {
    shadowColor: "#8D92A3",
    shadowOpacity: 0.1,
    // shadowOffset: { width: -2, height: 4 },
    shadowRadius: 1,
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    elevation: 0.4,
  },
  cardContainer: {
    marginLeft: 24,
    marginTop: 78,
  },
  cardImg: {
    width: 200,
    height: 140,
    borderRadius: 8,
  },
  cardHeader: {
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Poppins_400Regular",
  },
  cardInfo: {
    padding: 8,
  },
});
