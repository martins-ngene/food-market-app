import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Profile = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
