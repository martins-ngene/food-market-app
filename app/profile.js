import { Stack } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";
import { icons } from "../icons";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View style={styles.userProfile}>
        <View style={styles.imageContainer}>
          <Image source={icons.avatar} style={styles.image} />
        </View>
        <Text style={styles.name}>Aashifa Sheikh</Text>
        <Text style={styles.email}>contact.uiuxexperts@gmail.com</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },
  userProfile: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: 230,
    fontFamily: "Poppins_400Regular",
    paddingVertical: 24,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    height: 110,
    padding: 24,
    borderRadius: 90,
    borderColor: "#8D92A3",
    borderWidth: 1,
    borderStyle: "dashed",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 90,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins_400Regular",
  },
  email: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#8D92A3",
  },
});
