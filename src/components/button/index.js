import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const Button = ({ onPress, label, preffix, suffix, variant, mr }) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: variant === "primary" ? "#567DF4" : "#567DF41A",
          marginRight: mr,
        },
      ]}
      onPress={onPress}
    >
      {preffix && (
        <View
          style={{
            marginRight: scale(9),
            color: variant === "primary" ? "#fff" : "#567DF4",
          }}
        >
          {preffix}
        </View>
      )}
      <Text
        style={[
          styles.text,
          { color: variant === "primary" ? "#fff" : "#567DF4" },
        ]}
      >
        {label}
      </Text>
      {suffix && (
        <View
          style={{
            marginLeft: scale(9),
            color: variant === "primary" ? "#fff" : "#567DF4",
          }}
        >
          {suffix}
        </View>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(20),
    backgroundColor: "#fff",
    justifyContent: "center",
    height: verticalScale(45),
  },
  text: {
    fontSize: scale(14),
  },
});
