import { View, TextInput } from "react-native";
import React from "react";
import global from "../../design-system/global-styles";
import { scale, verticalScale } from "react-native-size-matters";

const Input = ({ Icon, placeholder }) => {
  return (
    <View style={global.inputWrapper}>
      <Icon width="100%" maxWidth={scale(20)} maxHeight={verticalScale(20)} />
      <TextInput
        inputMode="text"
        style={global.input}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;
