import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

module.exports = StyleSheet.create({
  inputWrapper: {
    borderWidth: 1,
    borderWidth: 1,
    borderRadius: 10,
    color: "#464646",
    height: scale(59),
    padding: scale(18),
    flexDirection: "row",
    fontSize: scale(16),
    alignItems: "center",
    borderColor: "#D4D4D4",
    backgroundColor: "transparent",
  },
  input: {
    flex: 1,
    marginStart: 10,
  },
});
