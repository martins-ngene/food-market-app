import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { icons } from "../../icons";

const Header = ({
  onPress,
  headerText,
  subText,
  isBackBtn,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {isBackBtn && (
        <View style={styles.btnContainer}>
          <Pressable style={styles.btn} onPress={onPress}>
            <Image style source={icons.arrowBack} />
          </Pressable>
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.header}>{headerText}</Text>
        <Text style={styles.text}>{subText}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: "100%",
    height: 108,
    flexDirection: "row",
    alignItems: "center",
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
  textContainer: {
    paddingLeft: 8,
  },
  btnContainer: {
    paddingLeft: 8,
    paddingRight: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#EB0029",
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
});
