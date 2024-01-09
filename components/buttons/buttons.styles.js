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
    color: "#FBF2CF",
    textAlign: "center",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
  },

  btnWithIconContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
