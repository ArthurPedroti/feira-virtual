import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  title: {
    fontSize: 56,
    lineHeight: 66,
    fontWeight: "bold",
    color: "#4B7F52",
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 2,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF5400",
  },

  clientButton: {
    backgroundColor: "#4B7F52",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },

  marketButton: {
    backgroundColor: "#FF5400",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
