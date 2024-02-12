import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import StarRating from "react-native-star-rating-widget";
import { useState } from "react";
import { useNavigation } from "expo-router";

import { icons } from "../../icons";

const MenuCard = () => {
  const [rating, setRating] = useState(0);
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("food-details")}>
      <Image style={styles.cardImg} source={icons.card} />
      <View style={styles.text}>
        <View style={styles.details}>
          <Text style={styles.name}>Burger</Text>
          <Text style={styles.price}>USD 15.00</Text>
        </View>
        <View style={styles.rating}>
          <StarRating
            rating={rating}
            onChange={setRating}
            color='#EB0029'
            starSize={16}
          />
          <Text style={styles.ratingValue}>{rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  link: {
    width: "100",
  },
  text: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardImg: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  ratingValue: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#8D92A3",
  },
  name: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
  price: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#8D92A3",
  },
});
