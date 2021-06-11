import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  title: {
    fontSize: 16,
    color: "#444",
    paddingHorizontal: 20,
    marginBottom: 15,
    fontFamily: "Roboto_400Regular",
  },

  bold: {
    fontFamily: "Roboto_700Bold",
  },

  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    marginRight: 15,
  },

  thumbnail: {
    width: 200,
    height: 120,
    resizeMode: "cover",
    borderRadius: 2,
  },

  company: {
    fontSize: 20,
    color: "#333",
    marginTop: 10,
    fontFamily: "Roboto_700Bold",
  },

  price: {
    fontSize: 13,
    color: "#999",
    marginTop: 5,
    fontFamily: "Roboto_400Regular",
  },

  button: {
    height: 32,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginTop: 15,
  },

  buttonText: {
    color: "#fff",
    fontFamily: "Roboto_700Bold",
    fontSize: 11,
  },
});

export default styles;
