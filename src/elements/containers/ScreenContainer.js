import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import space from "../../design-system/common/space";
import { DrawerSceneWrapper } from "../../components";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";

const ScreenContainer = ({ children }) => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    borderRadius: interpolate(progress.value, [0, 1], [0, 30], "clamp"),
  }));

  return (
    <DrawerSceneWrapper>
      <Animated.View style={[styles.container, animatedStyle]}>
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
      </Animated.View>
    </DrawerSceneWrapper>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
});
