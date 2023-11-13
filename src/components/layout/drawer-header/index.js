import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Avatar from "../../svg/default-avatar";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";

const DrawerHeader = () => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      {
        scale: interpolate(progress.value, [0, 1], [0, 1], "clamp"),
      },
    ],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.avatar}>
        <Avatar maxWidth={scale(40)} maxHeight={scale(40)} width="100%" />
      </View>
      <View>
        <Text style={styles.userName}>Luís Alexandre</Text>
        <Text style={styles.description}>Eng Informática</Text>
      </View>
    </Animated.View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  container: {
    top: 0,
    flex: 1,
    zIndex: -1,
    elevation: 20,
    shadowRadius: 30,
    width: scale(235),
    shadowOpacity: 0.2,
    padding: scale(38),
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    paddingLeft: scale(27),
    fshadowColor: "#171717",
    backgroundColor: "#fff",
    paddingBottom: scale(19),
    borderBottomRightRadius: scale(50),
    shadowOffset: { width: -2, height: 4 },
  },
  avatar: {
    width: scale(40),
    height: scale(40),
    marginRight: scale(12),
    borderRadius: scale(25),
  },
  userName: {
    color: "#383838",
    fontWeight: "bold",
    fontSize: scale(12),
  },
  description: {
    color: "#5E5E5E",
    fontSize: scale(13),
  },
});
