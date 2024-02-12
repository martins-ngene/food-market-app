import { Image, Pressable, StyleSheet, Text, View, Link } from "react-native";
import React from "react";
import { Stack, useNavigation } from "expo-router";
import { StarRatingDisplay } from "react-native-star-rating-widget";

import { icons } from "../icons";
import { Button } from "../components/buttons";

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
        <View style={styles.ingredients}>
          <Text style={styles.subHeading}>Ingredients:</Text>
          <Text style={styles.text}>Seledri, telur, blueberry, madu.</Text>
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.text}>Total Price:</Text>
            <Text style={styles.heading}>IDR 12.289.000</Text>
          </View>
          <View style={styles.orderBtnContainer}>
            <Button buttonType='normal'>
              {/* <Link href={{ pathname: "tabs", params: { name: "Tabs" } }}> */}
              Order Now
              {/* </Link> */}
            </Button>
          </View>
        </View>
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
    width: 32,
    height: 32,
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
  ratingValue: {
    fontSize: 12,
    fontStyle: "normal",
    fontFamily: "Poppins_400Regular",
  },
  heading: {
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Poppins_400Regular",
  },
  subHeading: {
    fontSize: 14,
    fontStyle: "normal",
    fontFamily: "Poppins_400Regular",
  },
  ingredients: {
    marginTop: 12,
  },
  orderBtnContainer: {
    width: 160,
  },
  footer: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
