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
    width: "30%",
    resizeMode: "contain",
  },

  headerText: {
    fontSize: 15,
    color: "#737380",
  },

  headerTextBold: {
    fontWeight: "bold",
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 8,
    color: "#13131a",
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380",
  },

  incidentList: {
    marginTop: 32,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#Fff",
    marginBottom: 16,
  },

  marketProfile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: "cover",
  },

  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380",
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

  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailsButtonText: {
    color: "#4B7F52",
    fontSize: 15,
    fontWeight: "bold",
  },
});
