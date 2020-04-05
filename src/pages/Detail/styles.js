import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  image: {
    width: 100,
    height: "100%",
    resizeMode: "contain",
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#Fff",
    marginBottom: 16,
    marginTop: 8,
  },

  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    marginTop: 24,
    fontWeight: "bold",
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: "#737380",
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#Fff",
    marginBottom: 16,
  },

  heroTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#13131a",
    lineHeight: 30,
  },

  heroDescription: {
    fontSize: 15,
    color: "#737380",
    marginTop: 16,
    marginBottom: 16,
  },

  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  action: {
    backgroundColor: "#4B7F52",
    borderRadius: 8,
    height: 50,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },

  actionText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  categoriesList: {
    flexDirection: "row",
    marginBottom: 16,
    marginTop: 8,
  },

  marketCategories: {
    backgroundColor: "#FF5400",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    color: "#FFF",
    marginRight: 8,
  },
});
