import { View, ScrollView } from "react-native";
import React from "react";
import space from "../../design-system/common/space";

const ScreenContainer = ({ children }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: space.S,
        backgroundColor: "#FDFDFD",
        paddingHorizontal: space.S,
      }}
    >
      <View>{children}</View>
    </ScrollView>
  );
};

export default ScreenContainer;
