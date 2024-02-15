import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "expo-router";

import { icons } from "../../icons";

const OrderCard = ({ isCancelled, isPast }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("food-details")}>
      <Image style={styles.cardImg} source={icons.card} />
      <View style={styles.text}>
        <View style={styles.details}>
          <Text style={styles.name}>Avosalado</Text>
          <Text style={styles.price}>3 items • IDR 18.000.000</Text>
        </View>
        {isPast && (
          <View style={styles.orderInfo}>
            <Text style={styles.date}>Jun 12, 14:00</Text>
            {isCancelled && <Text style={styles.status}>Cancelled</Text>}
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default OrderCard;

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
  orderInfo: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardImg: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  date: {
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
    color: "#8D92A3",
  },
  status: {
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
    color: "#FA7070",
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
