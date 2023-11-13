import { View, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";

const DrawerSceneWrapper = ({ children }) => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      {
        scale: interpolate(progress.value, [0, 1], [1, 0.55], "clamp"),
      },
    ],
    marginLeft: interpolate(progress.value, [0, 1], [0, -85], "clamp"),
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.view}>{children}</View>
    </Animated.View>
  );
};

export default DrawerSceneWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    height: "100%",
    elevation: 20,
    shadowRadius: 30,
    shadowOpacity: 0.2,
    fshadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
  },
});
