import { View, TextInput } from "react-native";
import React from "react";
import global from "../../design-system/global-styles";
import { scale } from "react-native-size-matters";

const Input = ({ Icon }) => {
  return (
    <View style={global.inputWrapper}>
      <Icon width="100%" maxWidth={scale(20)} maxHeight={scale(20)} />
      <TextInput
        inputMode="text"
        style={global.input}
        placeholder="Search anything"
      />
    </View>
  );
};

export default Input;
