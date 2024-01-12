import { View, StyleSheet, Text } from "react-native";
import { Stack, useLocalSearchParams, Link } from "expo-router";
import { Button } from "../components/buttons";
import Input from "../components/input";

export default function SignUp() {
  const params = useLocalSearchParams();

  const pickImageAsync = async () => {
    // Select Image
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    // Check if image is selected
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      // console.log(selectedImage);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: params.name,
        }}
      />
      <View style={styles.addPhoto}>
        <Text>Add Photo</Text>
      </View>
      <View style={{ marginBottom: 16, width: "100%" }}>
        <Input label='Full Name' placeholder='Type your full name' />
      </View>
      <View style={{ marginBottom: 16, width: "100%" }}>
        <Input label='Email Address' placeholder='Type your email address' />
      </View>
      <View style={{ marginBottom: 24, width: "100%" }}>
        <Input label='Password' placeholder='Type your password' />
      </View>
      <Button buttonType='normal'>
        {/* <Link href={{ pathname: "signup", params: { name: "Sign Up" } }}> */}
        Continue
        {/* </Link> */}
      </Button>
      <Text style={styles.createAccount}>
        <Text style={{ color: "#575757", fontWeight: "400" }}>
          {" "}
          I Already Have an Account
        </Text>
        {"  "}
        <Link
          style={{ color: "#EB0029", fontWeight: "600" }}
          href={{ pathname: "signup", params: { name: "Sign Up" } }}>
          Log in
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  createAccount: {
    marginTop: 16,
    fontSize: 14,
    fontStyle: "normal",
  },
  addPhoto: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
    backgroundColor: "#F0F0F0",
    marginBottom: 16,
    borderRadius: 150,
    borderColor: "#8D92A3",
    borderWidth: 1,
    borderStyle: "dashed",
  },
});
