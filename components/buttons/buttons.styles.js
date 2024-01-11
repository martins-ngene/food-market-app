import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#EB0029",
  },

  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
  },

  btnWithIconContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    borderRadius: 50,
    gap: 10,
  },
  image: {
    width: 24,
    height: 24,
  },
});
