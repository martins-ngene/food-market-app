import { View, Text, StyleSheet, Image } from "react-native";
import StarRating from "react-native-star-rating-widget";
import { useState } from "react";
import { icons } from "../../icons";

const ProductCard = () => {
  const [rating, setRating] = useState(0);
  return (
    <View style={styles.card} >
      <Image style={styles.cardImg} source={icons.card} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardHeader}>Cherry Healthy {rating}</Text>
        <StarRating
          rating={rating}
          onChange={setRating}
          color='#EB0029'
          starSize={16}
        />
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 12,
    marginRight: 12,
    marginLeft: 6,
    width: 200,
    height: 220,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: '#000', 
    elevation: 4,
  // shadowProp: {
  // shadowColor: "#000",
  // shadowOpacity: 0.1,
  // shadowOffset: { width: -2, height: 4 },
  // shadowRadius: 1,
  // shadowOffset: { width: -2, height: 4 },
  // shadowOpacity: 0.2,
  // shadowRadius: 3,
  // elevation: 0.4,
  // },
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
