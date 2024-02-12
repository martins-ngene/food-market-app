import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useNavigation } from "expo-router";
import { StarRatingDisplay } from "react-native-star-rating-widget";

// import Header from "../components/header";
import { icons } from "../icons";

const FoodDetails = () => {
  const navigation = useNavigation();

  //   Rating Value
  let rating = 3;
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View>
        <View style={styles.btnContainer}>
          <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
            <Image style source={icons.arrowBack} />
          </Pressable>
        </View>
        <Image style={styles.image} source={icons.card} />
      </View>
      <View style={styles.details}>
        <Text style={styles.heading}>Cherry Healthy</Text>
        <View style={styles.rating}>
          <StarRatingDisplay rating={rating} color='#EB0029' starSize={16} />
          <Text style={styles.ratingValue}>{rating}</Text>
        </View>
        <Text style={styles.text}>
          Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
          pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
          teratur.
        </Text>
      </View>
    </View>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 450,
    backgroundColor: "#fff",
  },
  btnContainer: {
    paddingLeft: 8,
    paddingRight: 16,
    zIndex: 1,
    position: "absolute",
    top: 48,
    left: 20,
  },
  btn: {
    backgroundColor: "#EB0029",
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  details: {
    width: "100%",
    height: 360,
    position: "absolute",
    bottom: -340,
    backgroundColor: "#fff",
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    padding: 24,
  },
  text: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#8D92A3",
  },
  rating: {
    width: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  heading: {
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Poppins_400Regular",
  },
});
